<template>
  <div class="wrapper">
    <h2 class="category-title">{{ videoByCategory.name }}</h2>
    <ul class="category-carousel">
      <li
        v-for="(video, index) in videoByCategory.thumbnails"
        :key="index"
        class="category-carousel-card"
      >
        <router-link
          :to="{
            name: 'video-show',
            params: {
              id: video.id,
              cat: videoByCategory.cat,
              catId: videoByCategory.id,
            },
          }"
          class="category-carousel-img__container"
          ref="card"
        >
          <img
            :src="video.thumnail"
            :alt="video.title"
            class="category-carousel-card-img"
          />
        </router-link>
      </li>
    </ul>

    <button class="btn-prev" @click="scrollCarousel(-1)">
      <v-icon dark large class="slider-arrow">mdi-chevron-left</v-icon>
    </button>

    <button class="btn-next" @click="scrollCarousel(1)">
      <v-icon dark large class="slider-arrow">mdi-chevron-right</v-icon>
    </button>
  </div>
</template>

<script>
export default {
  name: "my-slider",
  props: ["videoByCategory"],
  data() {
    return {
      firstCardWidth: 0,
    };
  },
  methods: {
    scrollCarousel(direction) {
      const carousel = this.$el.querySelector(".category-carousel");
      this.firstCardWidth = this.$el.querySelector(
        ".category-carousel-card"
      ).offsetWidth;

      if (direction === 1) {
        carousel.scrollLeft += this.firstCardWidth;
      } else if (direction === -1) {
        carousel.scrollLeft -= this.firstCardWidth;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
