<script>
import { store } from "../store";
import MovieItem from "./MovieItem.vue";
import PreviewItem from "./PreviewItem.vue"
export default {
  name: "AppMain",
  components: {
    MovieItem,
    PreviewItem
  },
  data() {
    return {
      store,
      mainShow: true,
    };
  },
  mounted() {
    store.performTrendings()
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
          :cast="store.showedCast"
          :genres="store.itemGenresList"
          @click="store.performGetInfo(movie.media_type, movie.id)"
        />
      </div>
    </div>
    <div class="div" v-else>
      <div class="container-fluid">
        <h1>Welcome!</h1>
        <h4 class="text-white">Trendings of the week</h4>
        <h6 class="text-white">Movies</h6>
        <!-- <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-6">
          <PreviewItem 
          v-for="movie in store.trendingsList.movieTrends"
          :img="store.MOVIEIMG_URL"
          :movie="movie"/>
        </div>
        <h6 class="text-white">Series</h6>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-6">
          <PreviewItem v-for="item in store.trendingsList.tvTrends"
          :img="store.MOVIEIMG_URL"
          :movie="movie"/>
        </div> -->
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  color: white;
}
</style>
