<template>
  <v-app class="app">
    <nav-bar></nav-bar>
    <router-view :key="$route.fullPath" />
  </v-app>
</template>

<script>
import "./sass/main.scss";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    "nav-bar": Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
// your styles
</style>
