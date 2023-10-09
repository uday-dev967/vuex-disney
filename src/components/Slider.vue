<template>
  <div class="wrapper">
    <h2 class="category-title">{{ videoByCategory.name }}</h2>
    <ul class="carousel">
      <li
        v-for="(video, index) in videoByCategory.thumbnails"
        :key="index"
        class="card"
      >
        <div class="img__container">
          <img
            src="../assets/disney-thumbnail1.jpg"
            draggable="false"
            :alt="video.title"
            class="img"
          />
        </div>
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
