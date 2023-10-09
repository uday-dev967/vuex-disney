<template>
  <div class="home">
    Home
    <carousel></carousel>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
export default {
  name: "Home-view",
  components: {
    carousel: Carousel,
  },
  data() {
    return {};
  },
};
</script>
