<script>
import {store} from '../store'
import CompleteProfile from './CompleteProfile.vue'
export default {
  name: "MovieItem",
  emits: ['showMoreInfo'],
  components: {
    CompleteProfile
  },
  data() {
    return {
      store,
      cardOnHover: false,
      showCompleteProf: false
    };
  },
  methods: {
    showItem(movie) {
      if (movie.media_type === "movie" || movie.media_type === "tv") {
        return true;
      } else {
        return false;
      }
    },
    getVoteIn5(number) {
      const voteIn5 = Math.ceil((number * 5) / 10);

      return voteIn5;
    },
    getEmptyStar(number) {
      const empty = 5 - number;

      return empty;
    },
  },
};
</script>
<template>
  <div class="col" v-for="movie in store.resultsList" v-show="showItem(movie)">
    <div
      class="card my-2"
      @mouseenter="movie.cardOnHover = true"
      @mouseleave="movie.cardOnHover = false"
      @click="store.performGetInfo(movie.media_type, movie.id), movie.showCompleteProf = true"
      >
      <!-- @click="$emit('showMoreInfo', movie.media_type, movie.id)" -->
      <div class="card-img">
        <!-- TODO immagine alternativa-->
        <img class="movie_poster" v-if="movie.poster_path === null" />
        <img
          class="movie_poster"
          :src="store.MOVIEIMG_URL + 'original' + movie.poster_path"
          v-else
        />
      </div>

      <div class="card_body" v-if="movie.cardOnHover">
        <div class="movie-title" v-if="movie.media_type === 'movie'">
          <h5 class="title"><strong>Title:</strong> {{ movie.title }}</h5>
          <h6 class="original_title"><strong>Original title:</strong> {{ movie.original_title }}</h6>
        </div>

        <div class="movie-title" v-else-if="movie.media_type === 'tv'">
          <h5 class="title"><strong>Title:</strong> {{ movie.name }}</h5>
          <h6 class="original_title"><strong>Original title:</strong> {{ movie.original_name }}</h6>
        </div>

        <img
          class="language_flag"
          :src="`https://unpkg.com/language-icons/icons/${movie.original_language}.svg`"
        />

        <div class="votation d-inline-block">
          <span class="vote">Vote: </span>
          <font-awesome-icon
            icon="fa-solid fa-star"
            v-for="n in getVoteIn5(movie.vote_average)"
          />
          <font-awesome-icon
            icon="fa-regular fa-star"
            v-for="n in getEmptyStar(getVoteIn5(movie.vote_average))"
          />
        </div>

        <div class="overview" v-if="movie.overview">
          <p><strong>Overview:</strong> {{ movie.overview }}</p>
        </div>
      </div>
      <CompleteProfile v-if="movie.showCompleteProf" :img="store.MOVIEIMG_URL" :movie="movie"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
