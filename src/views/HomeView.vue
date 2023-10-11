<template>
  <div class="home">
    <carousel></carousel>
    <categories></categories>
    <div class="home__categorey-slider-container">
      <my-slider
        v-for="(videoByCategory, index) in getVideosByCategory"
        :key="index"
        :videoByCategory="videoByCategory"
      ></my-slider>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Footer from "../components/Footer.vue";
import Carousel from "../components/Carousel.vue";
import Categories from "../components/Categories.vue";
import Slider from "../components/Slider.vue";
export default {
  name: "Home-view",
  components: {
    carousel: Carousel,
    categories: Categories,
    "my-slider": Slider,
    "app-footer": Footer,
  },
  data() {
    return {};
  },
  created() {
    this.fetchVidoes();
  },
  mounted() {
    const creds = localStorage.getItem("userCreds");
    const parsedCreds = JSON.parse(creds);
    this.fetchUsers(parsedCreds);
  },
  computed: {
    ...mapGetters("video", ["getVideosByCategory"]),
  },
  methods: {
    ...mapActions("video", ["fetchVidoes"]),
    ...mapActions("user", ["fetchUsers"]),
  },
};
</script>
