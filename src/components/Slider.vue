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
        >
          <img
            :src="video.thumnail"
            :alt="video.title"
            class="category-carousel-card-img"
          />
        </router-link>
      </li>
    </ul>
    <button class="btn-prev">
      <img src="../assets/left.svg" class="arrow" />
    </button>
    <button class="btn-next">
      <img src="../assets/right.svg" class="arrow" />
    </button>
  </div>
</template>

<script>
export default {
  name: "my-slider",
  props: ["videoByCategory"],
};
</script>

<style lang="scss" scoped></style>
