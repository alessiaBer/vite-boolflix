<script>
import { store } from "../store";
import SelectBox from "./SelectBox.vue";
import MovieItem from "./MovieItem.vue";
export default {
  name: "AppMain",
  components: {
    SelectBox,
    MovieItem
  },
  data() {
    return {
      store,
      mainShow: true,
    };
  },
  methods: {
    performMediaChoice() {
      const url = `${store.MOVIEDB_API}search/${store.selectedType + store.apiKey}query=${store.query.split(" ").join("+")}`
      store.performSearchMovie(url)
    },
  },
  mounted() {
    store.performTrendings();
    store.performGetGenres();
  },
};
</script>
<template>
  <main v-if="mainShow">
    <div class="container-fluid" v-if="store.query !== ''">
      <h5 class="text-white">Results for '{{ store.query }}'</h5>

      <SelectBox @chooseMedia="performMediaChoice()"/>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-6">
        <MovieItem
          v-for="(movie, index) in store.resultsList"
          :img="store.MOVIEDB_IMG"
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
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  color: white;
}
</style>
