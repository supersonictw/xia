<template>
  <div class="hello">
    <h1>LINE Web Client for any platform</h1>
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
  </div>
</template>

<script>
import Constant from "@/data/const.js";

import Thrift from "@/computes/thrift.js";
import TalkService from "@/computes/line/TalkService.js";

export default {
  name: "Login",
  data() {
    return {
      user: {
        identity: "",
        password: "",
      },
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      console.log(this.user.identity, this.user.password);
      let client = this.connect();
      client.loginZ();
    },
    connect() {
      const transport = new Thrift.TXHRTransport(
        Constant.LINE_SERVER_HOST + Constant.LINE_QUERY_PATH
      );
      const protocol = new Thrift.TBinaryProtocol(transport);
      const client = new TalkService.TalkServiceClient(protocol);
      transport.open();
      return client;
    },
  },
};
</script>

<style scoped>
.login,
.login input {
  margin: 15px 15px 15px 15px;
}
</style>
