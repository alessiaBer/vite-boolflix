<script>
import { store } from "../store";
import MovieItem from "./MovieItem.vue";
export default {
  name: "AppMain",
  components: {
    MovieItem
  },
  data() {
    return {
      store,
      mainShow: true,
    };
  },
  mounted() {
    store.performGetGenres()
  }
};
</script>
<template>
  <main v-if="mainShow">
    <div class="container-fluid" v-if="store.query !== ''">
      <h5 class="text-white">Results for '{{ store.query }}'</h5>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-6">
        <MovieItem
          v-for="(movie, index) in store.resultsList"
          :img="store.MOVIEIMG_URL"
          :movie="movie"
          :cast="store.showCast"
          @click="store.performGetInfo(movie.media_type, movie.id)"
        />
      </div>
    </div>
    <div class="div" v-else>
      <div class="container-fluid">
        <h1>Benvenuto</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-6">
          <MovieItem 
          v-for="movie in previewMovies"/>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  color: white;
}
</style>
