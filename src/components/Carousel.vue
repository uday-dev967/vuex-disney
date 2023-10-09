<template>
  <div class="carousel-container">
    <div
      ref="carousel"
      class="carousel-slide"
      :style="{ transform: `translateX(${translateX}%)` }"
    >
      <div v-for="(item, index) in carouselItems" :key="index" class="slide">
        <img class="carousel-slide-img" v-bind:src="item.src" alt="Image" />
      </div>
    </div>
    <div class="carousel-indicators">
      <div
        v-for="(item, index) in carouselItems"
        :key="index"
        class="carousel-indicator"
        :class="{ active: currentIndex === index }"
        @click="changeSlide(index)"
      ></div>
    </div>
  </div>
</template>

<script>
import avengers from "../assets/avengers.jpg";
import deadpool from "../assets/deadpool.jpg";
import joker from "../assets/joker.jpg";
export default {
  name: "carousel-component",
  data() {
    return {
      currentIndex: 0,
      translateX: 0,
      image: avengers,
      carouselItems: [{ src: avengers }, { src: joker }, { src: deadpool }],
    };
  },
  methods: {
    changeSlide(index) {
      console.log("clicked");
      this.currentIndex = index;
      this.translateX = -index * 100;
    },
  },
};
</script>
<style></style>
