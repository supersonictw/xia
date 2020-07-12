<template>
  <div class="hello">
    <h1>LINE Web Client for any platform</h1>
    <p>
      This is an
      <a href="https://github.com/supersonictw/xia" target="_blank" rel="noopener">OSS</a>
      with
      <a
        href="https://github.com/supersonictw/xia/blob/master/LICENSE"
        target="_blank"
        rel="noopener"
      >Mozilla Public License v.2.0</a>.
    </p>
    <h3>Login with LINE account</h3>
    <p>{{ loginStatus }}</p>
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
        <input type="submit" value="Login" @click="login" />
      </div>
    </form>
    <p>IP: {{ user.ip_addr }}</p>
  </div>
</template>

<script>
import Constant from "@/data/const.js";

import utf8 from "utf8";
import thrift from "thrift";
import crypto from "node-bignumber";

import lineType from "@/computes/line/line_types.js";
import talkService from "@/computes/line/TalkService.js";

export default {
  name: "Login",
  data() {
    return {
      user: {
        ip_addr: "Unknown",
        identity: "",
        password: ""
      },
      loginStatus: ""
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      if (this.user.identity.length < 1 || this.user.password.length < 1) {
        return;
      }
      const loginClient = this.connect(Constant.LINE_LOGIN_PATH);
      const loginRequest = await this.getCredential();
      const loginResponse = await loginClient
        .loginZ(loginRequest)
        .catch(error => (this.loginStatus = error.reason));
      if (loginResponse !== this.loginStatus) {
        await this.verifyPinCode(loginResponse);
      }
    },
    async getCredential() {
      const authClient = this.connect(Constant.LINE_AUTH_PATH);
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
        certificate: null,
        e2eeVersion: 0
      });
    },
    async verifyPinCode(loginResult) {
      this.loginStatus = `Confirm your PinCode with ${loginResult.pinCode} in 2 minutes.`;
      switch (loginResult.type) {
        case lineType.LoginResultType.REQUIRE_DEVICE_CONFIRM: {
          const certificateResponse = await fetch(
            `${Constant.LINE_USE_HTTPS ? "https" : "http"}://${
              Constant.LINE_SERVER_HOST
            }${Constant.LINE_CERTIFICATE_PATH}`,
            {
              method: "GET",
              cache: "no-cache",
              headers: {
                Accept: "application/json",
                "X-Line-Access": loginResult.verifier,
                "X-Line-Application": Constant.LINE_APPLICATION_IDENTITY
              },
              keepalive: true
            }
          );
          const accessKey = await certificateResponse.json();
          const verifyClient = this.connect(Constant.LINE_LOGIN_PATH);
          verifyClient.setHeader;
          const verifyRequest = new lineType.LoginRequest({
            type: lineType.LoginType.QRCODE,
            identityProvider: lineType.IdentityProvider.LINE,
            verifier: accessKey.result.verifier,
            keepLoggedIn: true,
            accessLocation: this.user.ip_addr,
            systemName: Constant.NAME,
            e2eeVersion: 0
          });
          const verifyResult = await verifyClient.loginZ(verifyRequest);
          if (verifyResult.type == lineType.LoginResultType.SUCCESS) {
            this.loginStatus = "Successful";
            this.$store.commit("updateAuthToken", verifyResult.authToken);
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
          this.$store.commit("updateAuthToken", loginResult.authToken);
          return true;
      }
    },
    async getUserIP() {
      let response = await fetch("https://restapi.starinc.xyz/basic/ip");
      let data = await response.json();
      return data.data.ip_addr;
    },
    connect(path) {
      let host = Constant.LINE_SERVER_HOST;
      let port = Constant.LINE_USE_HTTPS ? 443 : 80;
      let opts = {
        transport: thrift.TBufferedTransport,
        protocol: thrift.TCompactProtocol,
        headers: {
          "X-Line-Application": Constant.LINE_APPLICATION_IDENTITY
        },
        https: Constant.LINE_USE_HTTPS,
        path: path,
        useCORS: true
      };

      let connection = thrift.createHttpConnection(host, port, opts);
      let thriftClient = thrift.createHttpClient(talkService, connection);

      connection.on("error", err => {
        console.error(err);
      });

      return thriftClient;
    }
  },
  async created() {
    this.user.ip_addr = await this.getUserIP();
  }
};
</script>

<style scoped>
.login,
.login input {
  margin: 15px 15px 15px 15px;
}
</style>
