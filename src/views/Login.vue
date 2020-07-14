<!--
    XIA - LINE Web Client
    ---
  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  (c) 2020 SuperSonic. (https://github.com/supersonictw)
-->

<template>
  <div>
    <img alt="XIA logo" src="@/assets/logo.svg" />
    <h2>LINE Web Client for any platform</h2>
    <p>
      This is an
      <a
        href="https://github.com/supersonictw/xia"
        target="_blank"
        rel="noopener"
        >OSS</a
      >
      with
      <a
        href="https://github.com/supersonictw/xia/blob/master/LICENSE"
        target="_blank"
        rel="noopener"
        >Mozilla Public License v.2.0</a
      >.
    </p>
    <h3>Login with LINE account</h3>
    <p class="warning">{{ loginStatus }}</p>
    <form class="login" method="post">
      <div>
        <label for="line-identity">Email:</label>
        <input
          id="line-identity"
          type="email"
          autocomplete="on"
          class="form-control"
          v-model="user.identity"
          required
        />
      </div>
      <div>
        <label for="line-password">Password:</label>
        <input
          id="line-password"
          type="password"
          autocomplete="on"
          class="form-control"
          v-model="user.password"
          required
        />
      </div>
      <div>
        <input type="submit" value="Login" @click.prevent="login" />
      </div>
    </form>
    <p>IP: {{ user.ip_addr }}</p>
  </div>
</template>

<script>
import Constant from "@/data/const.js";

import utf8 from "utf8";
import axios from "axios";
import hash from "js-sha256";
import crypto from "node-bignumber";

import lineClient from "@/computes/line.js";
import lineType from "@/computes/line/line_types.js";

export default {
  name: "Login",
  data() {
    return {
      user: {
        ip_addr: "Unknown",
        identity: "",
        password: "",
      },
      loginStatus: "",
    };
  },
  methods: {
    async login() {
      if (this.user.identity.length < 1 || this.user.password.length < 1) {
        this.loginStatus = "Empty identity or password";
        return;
      }
      const loginClient = lineClient(Constant.LINE_LOGIN_PATH);
      const loginRequest = await this.getCredential();
      const loginResponse = await loginClient
        .loginZ(loginRequest)
        .catch((error) => (this.loginStatus = error.reason));
      if (loginResponse !== this.loginStatus) {
        let status = await this.verifyPinCode(loginResponse);
        if (status === true) {
          window.location.reload();
        } else {
          this.loginStatus = "Login failed";
        }
      }
    },
    async getCredential() {
      const authClient = lineClient(Constant.LINE_AUTH_PATH);
      const rsaKey = await authClient.getRSAKeyInfo(
        lineType.IdentityProvider.LINE
      );
      const message = utf8.encode(
        String.fromCharCode(rsaKey.sessionKey.length) +
          rsaKey.sessionKey +
          String.fromCharCode(this.user.identity.length) +
          this.user.identity +
          String.fromCharCode(this.user.password.length) +
          this.user.password
      );
      const rsa = new crypto.Key();
      rsa.setPublic(rsaKey.nvalue, rsaKey.evalue);
      const encrypted_msg = rsa.encrypt(message).toString("hex");
      return new lineType.LoginRequest({
        type: lineType.LoginType.ID_CREDENTIAL,
        identityProvider: lineType.IdentityProvider.LINE,
        identifier: rsaKey.keynm,
        password: encrypted_msg,
        keepLoggedIn: true,
        accessLocation: this.user.ip_addr,
        systemName: Constant.NAME,
        certificate: this.$cookies.get(
          `${Constant.COOKIE_ACCESS_CERTIFICATE_PREFIX}_${hash.sha256(
            this.user.identity
          )}`
        ),
        e2eeVersion: 0,
      });
    },
    async verifyPinCode(loginResult) {
      this.loginStatus = `Confirm your PinCode with ${loginResult.pinCode} in 2 minutes.`;
      switch (loginResult.type) {
        case lineType.LoginResultType.REQUIRE_DEVICE_CONFIRM: {
          const certificateResponse = await axios(
            `${Constant.LINE_USE_HTTPS ? "https" : "http"}://${
              Constant.LINE_SERVER_HOST
            }${Constant.LINE_CERTIFICATE_PATH}`,
            {
              method: "GET",
              headers: {
                Accept: "application/json",
                "X-Line-Access": loginResult.verifier,
                "X-Line-Application": Constant.LINE_APPLICATION_IDENTITY,
              },
            }
          );
          const accessKey = certificateResponse.data;
          const verifyClient = lineClient(Constant.LINE_LOGIN_PATH);
          verifyClient.setHeader;
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
            this.loginStatus = "Successful";
            this.setAuthToken(verifyResult.authToken);
            this.setAccessCertificate(verifyResult.certificate);
            return true;
          }
          this.loginStatus = "Unknown Error";
          return false;
        }
        case lineType.LoginResultType.REQUIRE_QRCODE:
          this.loginStatus = "QR Code Login Required. But nothing to do.";
          return false;
        case lineType.LoginResultType.SUCCESS:
          this.loginStatus = "Successful";
          this.setAuthToken(loginResult.authToken);
          return true;
      }
    },
    async getUserIP() {
      let response = await axios("https://restapi.starinc.xyz/basic/ip");
      let result = response.data;
      return result.data.ip_addr;
    },
    setAuthToken(authToken) {
      this.$cookies.set(Constant.COOKIE_ACCESS_KEY, authToken);
    },
    setAccessCertificate(certificate) {
      this.$cookies.set(
        `${Constant.COOKIE_ACCESS_CERTIFICATE_PREFIX}_${hash.sha256(
          this.user.identity
        )}`,
        certificate
      );
    },
  },
  async created() {
    this.user.ip_addr = await this.getUserIP();
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

.login,
.login input {
  margin: 15px 15px 15px 15px;
}

.warning {
  color: #ff1100;
}
</style>
