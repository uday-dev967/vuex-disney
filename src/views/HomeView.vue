<template>
  <div class="home">
    <carousel></carousel>
    <categories></categories>
    <div class="home__categorey-slider-container">
      <my-slider
        v-for="(videoByCategory, index) in getVideosByCategory"
        :key="index"
        v-bind:videoByCategory="videoByCategory"
      ></my-slider>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Carousel from "../components/Carousel.vue";
import Categories from "../components/Categories.vue";
import Slider from "../components/Slider.vue";
export default {
  name: "Home-view",
  components: {
    carousel: Carousel,
    categories: Categories,
    "my-slider": Slider,
  },
  data() {
    return {};
  },
  created() {
    this.fetchVidoes();
  },
  computed: {
    ...mapGetters("video", ["getVideosByCategory"]),
  },
  methods: {
    ...mapActions("video", ["fetchVidoes"]),
  },
};
</script>
