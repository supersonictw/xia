<template>
  <div id="app" class="ui">
    <img alt="Vue logo" src="./assets/logo.svg" />
    <Login></Login>
  </div>
</template>

<script>
import Store from './data/store.js'
import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
    Login,
  },
  store: Store
};
</script>

<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
