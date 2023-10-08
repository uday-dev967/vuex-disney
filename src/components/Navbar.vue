<template>
  <div class="nav-bar-container">
    <v-app-bar class="nav-bar" color="black accent-4">
      <router-link :to="{ name: 'home' }" class="app-title">
        <v-img class="header-logo" src="../assets/applogo.svg"></v-img>
      </router-link>
      <v-toolbar-title class="ml-12 nav-bar-list-items">
        <v-row align="center" class="nav-bar-list-items-row">
          <v-col
            v-for="(item, index) in navItems"
            :key="index"
            cols="auto"
            class="nav-bar-list-items-col"
          >
            <v-icon dark @click="navigate(item.route)">{{ item.icon }}</v-icon>
            <p class="white--text mt-5 pl-1">
              {{ uppercase(item.label) }}
            </p>
          </v-col>
        </v-row>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="getLoggedInStatus">
        <v-btn icon dark @click="logout">
          <v-icon>mdi-logout</v-icon>
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
        { label: "Home", icon: "mdi-home", route: "/home" },
        { label: "sreach", icon: "mdi-magnify", route: "/home" },
        { label: "watchlist", icon: "mdi-plus", route: "/home" },
        { label: "original", icon: "mdi-star", route: "/home" },
        { label: "movies", icon: "mdi-movie", route: "/home" },
        { label: "series", icon: "mdi-television", route: "/home" },
      ],
    };
  },
  computed: {
    ...mapGetters("user", ["getLoggedInStatus"]),
  },
  methods: {
    ...mapActions("search", ["changeSearchInput"]),
    resetHome() {
      this.searchInput = "";
      this.changeSearchInput("");
    },
    logout() {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userCreds");
      this.$router.push({ name: "login" });
      this.$store.dispatch("user/logout");
    },
  },
  mixins: [mixins],
};
</script>
<style></style>
