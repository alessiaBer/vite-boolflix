<script>
import { store } from "../store";
import SelectBox from "./SelectBox.vue";
import MovieItem from "./MovieItem.vue";
import TrendItem from './TrendItem.vue';
export default {
  name: "AppMain",
  components: {
    SelectBox,
    MovieItem,
    TrendItem
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    performMediaChoice() {
      const url = `${store.MOVIEDB_API}search/${store.selectedType + store.apiKey}query=${store.query.split(" ").join("+")}`
      
      store.performSearchMovie(url)
    }
  },
  mounted() {
    store.performTrendings();
    store.performGetGenres();
  },
};
</script>
<template>
  <main>
    <div class="container-fluid" v-if="store.query !== ''">
      <h5 class="text-white">Results for '{{ store.query }}'</h5>

      <SelectBox @chooseMedia="performMediaChoice()"/>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-6">
        <MovieItem
          v-for="movie in store.resultsList"
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
        <h1 class="pb-4">Welcome!</h1>
        <h2 class="text-white">Trendings of the week</h2>
        <div class="trends my-5" v-for="(singleResult, title) in store.trendingsList">
          <h4 class="text-white">{{ title }}</h4>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4" v-if="singleResult">
            <TrendItem v-for="item in singleResult.results"
            :img="store.MOVIEDB_IMG"
            :item="item"/>
            <font-awesome-icon icon="fa-solid fa-circle-chevron-right" class="icon"/>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  color: white;
}
.trends {
  .row {
    flex-wrap: nowrap;
    overflow-x: hidden;
    position: relative;
    .icon {
      position: absolute;
      left: 96.5%;
      top: 35%;
      width: fit-content;
      font-size: 2rem;
      color: white;
    }
  }
}

</style>
