<!--
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2021 SuperSonic. (https://github.com/supersonictw)
-->

<template>
  <div class="view">
    <Back />
    <div id="login-box">
      <div id="header">
        <div id="logo">
          <img alt="XIA logo" src="@/assets/logo.svg" />
        </div>
        <h1>XIA</h1>
      </div>
      <h3>
        Login with
        <a href="https://line.me" target="_blank" rel="noopener">LINE</a>
        account.
      </h3>
      <p class="warning">{{ loginStatus }}</p>
      <form method="post">
        <div id="login-input-box">
          <input
            id="line-identity"
            type="email"
            autocomplete="on"
            class="form-control login-input-box-text"
            placeholder="Email"
            v-model="user.identity"
            required
          />
          <input
            id="line-password"
            type="password"
            autocomplete="on"
            class="form-control login-input-box-text"
            placeholder="Password"
            v-model="user.password"
            required
          />
        </div>
        <div>
          <input
            type="submit"
            class="login-input-box-submit"
            value="Login"
            @click.prevent="loginSubmit"
            :disabled="loginWaiting"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Constant from '@/data/const.js';

import Back from '@/components/Back.vue';

import utf8 from 'utf8';
import axios from 'axios';
import hash from 'js-sha256';
import crypto from 'node-bignumber';

import lineClient from '@/computes/line.js';
import lineType from '@/computes/protocol/line_types.js';

export default {
  name: 'Login',
  components: {Back},
  data() {
    return {
      user: {
        ip_addr: 'Unknown',
        identity: '',
        password: '',
      },
      loginWaiting: false,
      loginStatus: '',
    };
  },
  methods: {
    async loginSubmit() {
      if (this.loginWaiting) return;
      this.loginWaiting = true;
      try {
        await this.login();
      } catch (e) {
        console.error(e);
      }
      this.loginWaiting = false;
    },
    async login() {
      if (this.user.identity.length < 1 || this.user.password.length < 1) {
        this.loginStatus = 'Empty identity or password';
        return;
      }
      const loginClient = lineClient(Constant.LINE_LOGIN_PATH);
      const loginRequest = await this.getCredential();
      const loginResponse = await loginClient
          .loginZ(loginRequest)
          .catch((error) => (this.loginStatus = error.reason));
      if (loginResponse !== this.loginStatus) {
        try {
          const status = await this.verifyPinCode(loginResponse);
          if (status === true) {
            window.location.reload();
          } else {
            this.loginStatus = 'Login failed';
          }
        } catch (e) {
          console.error(e);
        }
      }
    },
    async getCredential() {
      const authClient = lineClient(Constant.LINE_AUTH_PATH);
      const rsaKey = await authClient.getRSAKeyInfo(
          lineType.IdentityProvider.LINE,
      );
      const message = utf8.encode(
          String.fromCharCode(rsaKey.sessionKey.length) +
          rsaKey.sessionKey +
          String.fromCharCode(this.user.identity.length) +
          this.user.identity +
          String.fromCharCode(this.user.password.length) +
          this.user.password,
      );
      const rsa = new crypto.Key();
      rsa.setPublic(rsaKey.nvalue, rsaKey.evalue);
      const encryptedMessage = rsa.encrypt(message).toString('hex');
      return new lineType.LoginRequest({
        type: lineType.LoginType.ID_CREDENTIAL,
        identityProvider: lineType.IdentityProvider.LINE,
        identifier: rsaKey.keynm,
        password: encryptedMessage,
        keepLoggedIn: true,
        accessLocation: this.user.ip_addr,
        systemName: Constant.NAME,
        certificate: this.$cookies.get(
            `${Constant.COOKIE_ACCESS_CERTIFICATE_PREFIX}_${hash.sha256(
                this.user.identity,
            )}`,
        ),
        e2eeVersion: 0,
      });
    },
    async verifyPinCode(loginResult) {
      this.loginStatus =
          `Confirm your PinCode with ${loginResult.pinCode} in 2 minutes.`;
      switch (loginResult.type) {
        case lineType.LoginResultType.REQUIRE_DEVICE_CONFIRM: {
          const certificateResponse = await axios(
              `${Constant.LINE_USE_HTTPS ? 'https' : 'http'}://${
                Constant.LINE_SERVER_HOST_FOR_XHR
              }${Constant.LINE_CERTIFICATE_PATH}`,
              {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Cache-Control': 'no-cache',
                  'X-Line-Access': loginResult.verifier,
                  'X-Line-Application': Constant.LINE_APPLICATION_IDENTITY,
                },
              },
          );
          const accessKey = certificateResponse.data;
          const verifyClient = lineClient(Constant.LINE_LOGIN_PATH);
          const verifyRequest = new lineType.LoginRequest({
            type: lineType.LoginType.QRCODE,
            identityProvider: lineType.IdentityProvider.LINE,
            verifier: accessKey.result.verifier,
            keepLoggedIn: true,
            accessLocation: this.user.ip_addr,
            systemName: Constant.NAME,
            e2eeVersion: 0,
          });
          const verifyResult = await verifyClient.loginZ(verifyRequest);
          if (verifyResult.type == lineType.LoginResultType.SUCCESS) {
            this.loginStatus = 'Successful';
            this.setAuthToken(verifyResult.authToken);
            this.setAccessCertificate(verifyResult.certificate);
            return true;
          }
          this.loginStatus = 'Unknown Error';
          return false;
        }
        case lineType.LoginResultType.REQUIRE_QRCODE:
          this.loginStatus = 'QR Code Login Required. But nothing to do.';
          return false;
        case lineType.LoginResultType.SUCCESS:
          this.loginStatus = 'Successful';
          this.setAuthToken(loginResult.authToken);
          return true;
      }
    },
    async getUserIP() {
      const response = await axios('https://restapi.starinc.xyz/basic/ip');
      const result = response.data;
      return result.data.ip_addr;
    },
    setAuthToken(authToken) {
      this.$cookies.set(Constant.COOKIE_ACCESS_KEY, authToken);
    },
    setAccessCertificate(certificate) {
      const cookieName = `${
        Constant.COOKIE_ACCESS_CERTIFICATE_PREFIX
      }_${hash.sha256(this.user.identity)}`;
      this.$cookies.set(cookieName, certificate, '1y');
    },
  },
  async created() {
    this.user.ip_addr = await this.getUserIP();
  },
};
</script>

<style scoped>
.view {
  margin: 60px auto;
}

.warning {
  color: #ff1100;
}

#login-box {
  width: 35%;
  height: auto;
  padding: 10px;
  border-radius: 10px;
  margin: 60px auto;
  background: #fff;
}

#login-input-box {
  width: auto;
  padding: 10px;
  margin: 0 auto;
}

.login-input-box-text {
  width: 90%;
  height: 30px;
  margin: 10px auto;
  font-size: 15px;
  padding: 5px;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.login-input-box-submit {
  width: 80px;
  height: 39px;
  cursor: pointer;
  font-size: 15px;
  margin: 30px auto;
  border: #42b983 1.5px solid;
  border-radius: 5px;
  background: rgb(255, 255, 255);
}

.login-input-box-submit:hover {
  background: rgba(0, 125, 0, 0.1);
}

.login-input-box-submit:active {
  background: rgb(255, 255, 255);
}

#header {
  width: 100%;
  height: auto;
}

#logo {
  width: 70px;
  height: 70px;
  margin: 0 auto;
  border-color: #000;
  border-radius: 70px;
}

#logo img {
  width: auto;
  height: auto;
}

@media (max-width: 780px) {
  #login-box {
    width: auto;
  }
}
</style>
