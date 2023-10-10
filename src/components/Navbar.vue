<template>
  <div class="nav-bar-container">
    <v-app-bar class="nav-bar" color="black accent-4">
      <router-link :to="{ name: 'home' }" class="app-title">
        <v-img class="header-logo" src="../assets/applogo.svg"></v-img>
      </router-link>
      <v-toolbar-title
        v-if="getLoggedInStatus"
        class="ml-12 nav-bar-list-items"
      >
        <v-row align="center" class="nav-bar-list-items-row">
          <v-col v-for="(item, index) in navItems" :key="index" cols="auto">
            <router-link :to="{ name: 'home' }" class="nav-bar-list-items-col">
              <v-icon dark>{{ item.icon }}</v-icon>
              <p
                class="white--text mt-5 pl-1 caption nav-bar-list-items-col-label"
              >
                {{ uppercase(item.label) }}
              </p>
            </router-link>
          </v-col>
        </v-row>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="getLoggedInStatus">
        <v-btn dark @click="signOut" class="mr-5">
          <v-icon left>mdi-logout</v-icon>
          Logout
        </v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import mixins from "../mixins/mixin.js";
export default {
  name: "Nav-bar",
  data() {
    return {
      navItems: [
        { label: "Home", icon: "mdi-home", route: "home" },
        { label: "sreach", icon: "mdi-magnify", route: "sreach" },
        { label: "watchlist", icon: "mdi-plus", route: "watchlist" },
        { label: "original", icon: "mdi-star", route: "original" },
        { label: "movies", icon: "mdi-movie", route: "movies" },
        { label: "series", icon: "mdi-television", route: "series" },
      ],
    };
  },
  computed: {
    ...mapGetters("user", ["getLoggedInStatus"]),
  },
  methods: {
    ...mapActions("user", ["logout"]),
    resetHome() {
      this.searchInput = "";
      this.changeSearchInput("");
    },
    signOut() {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userCreds");
      this.$router.push({ name: "login" });
      this.logout;
    },
  },
  mixins: [mixins],
};
</script>
<style></style>
