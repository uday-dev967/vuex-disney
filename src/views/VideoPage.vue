<template>
  <div class="home__page-video-section">
    <div class="vidoe__page-container" :style="backgroundStyle">
      <div class="vidoe__page-content">
        <h1 class="vidoe__page-content-title">{{ video.title }}</h1>
        <div class="vidoe__page-content-title">
          <v-btn class="mr-1">Watch Now</v-btn>
          <v-btn class="mr-1">Trailer</v-btn>
          <div class="vidoe__page-content-actions-more">
            <v-btn fab small class="black mr-1">
              <v-icon color="white">mdi-plus</v-icon>
            </v-btn>
            <v-btn fab small class="black">
              <v-icon color="white">mdi-account-multiple</v-icon>
            </v-btn>
          </div>
        </div>
        <p class="white--text">
          {{ video.description }}
        </p>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Footer from "../components/Footer.vue";
export default {
  props: ["id", "cat", "catId"],
  data() {
    return {
      video: {},
    };
  },
  components: {
    "app-footer": Footer,
  },
  created() {
    this.isTheUserLoggedIn();
    this.getTheVideo();
  },

  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `linear-gradient(to right, rgba(12, 6, 41, 0.7), rgba(6, 2, 35, 0.7)), url(${
          this.video
            ? this.video.thumnail
            : "https://image.tmdb.org/t/p/w500//puJKgNcWaGgMk5VHanSSomUTpmw.jpg"
        })`,
      };
    },
  },
  methods: {
    ...mapActions("user", ["fetchUsers"]),
    ...mapActions("video", ["fetchVideo"]),
    ...mapGetters("video", ["getVideoByid", "getVideo"]),
    async getTheVideo() {
      this.video = await this.fetchVideo({ catId: this.catId, id: this.id });
    },
    async isTheUserLoggedIn() {
      const creds = localStorage.getItem("userCreds");
      const parsedCreds = JSON.parse(creds);
      await this.fetchUsers(parsedCreds);
    },
  },
};
</script>

<style lang="scss" scoped></style>
