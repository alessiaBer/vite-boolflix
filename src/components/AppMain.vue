<script>
import { store } from "../store";
import MovieItem from './MovieItem.vue'
export default {
  name: "AppMain",
  components: {
    MovieItem
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-6">
      <MovieItem :movies="store.resultsList" :img="store.MOVIEIMG_URL"/>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
