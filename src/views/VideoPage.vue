<template>
  <div class="home__page-video-section">
    <div class="vidoe__page-container" :style="backgroundStyle">
      <div class="vidoe__page-content">
        <h1 class="vidoe__page-content-title">Video1</h1>
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
          A beautiful girl, Snow White, takes refuge in the forest in the house
          of seven dwarfs to hide from her stepmother, the wicked Queen. The
          Queen is jealous because she wants to be known as 'the fairest in the
          land,' and Snow White's beauty surpasses her own.", "title": "Video1
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import image from "../assets/disney-thumbnail1.jpg";
export default {
  props: ["id"],
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `linear-gradient(to right, rgba(12, 6, 41, 0.7), rgba(6, 2, 35, 0.7)), url(${image})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
