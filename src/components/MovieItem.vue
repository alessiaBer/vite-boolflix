<script>
export default {
    name: 'MovieItem',
    props: {
        movies: Array
    },
    methods: {
      showItem(movie) {
        if (movie.media_type === 'movie' || movie.media_type === 'tv') {
          return true
        } else {
          return false
        }
      }
    }
};
</script>
<template>
  <div class="col" v-for="movie in movies" v-show="showItem(movie)">
    <div class="card">
      <div class="movie-info" v-if="movie.media_type === 'movie'">
        <h5 class="title">{{ movie.title }}</h5>
        <h6 class="original_title">{{ movie.original_title }}</h6>
        <img class="language_flag" :src="`https://unpkg.com/language-icons/icons/${movie.original_language}.svg`">
        <span class="vote">Vote: {{ movie.vote_average }}</span>
      </div>
      <div class="movie-info" v-else-if="movie.media_type === 'tv'">
        <h5 class="title">{{ movie.name }}</h5>
        <h6 class="original_title">{{ movie.original_name }}</h6>
        <img class="language_flag" :src="`https://unpkg.com/language-icons/icons/${movie.original_language}.svg`">
        <span class="vote">Vote: {{ movie.vote_average }}</span>
      </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>
.language_flag {
    width: 30px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
}
</style>
