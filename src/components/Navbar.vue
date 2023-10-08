<template>
  <div class="nav-bar-container">
    <v-app-bar class="nav-bar" color="black accent-4">
      <router-link :to="{ name: 'home' }" class="app-title">
        <v-img class="header-logo" src="../assets/applogo.svg"></v-img>
      </router-link>

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
export default {
  name: "Nav-bar",
  data() {
    return {
      searchInput: "",
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
};
</script>
<style></style>
