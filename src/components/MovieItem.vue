<script>
export default {
    name: 'MovieItem',
    props: {
        movies: Array,
        img: String
    },
    methods: {
      showItem(movie) {
        if (movie.media_type === 'movie' || movie.media_type === 'tv') {
          return true
        } else {
          return false
        }
      },
      getStarVote(number) {
        const roundedVote = Math.ceil(number)
        const voteIn5 = (roundedVote * 5) / 10
        
        return voteIn5
      }
    }
};
</script>
<template>
  <div class="col" v-for="movie in movies" v-show="showItem(movie)">
    <div class="card">
      <div class="card-img">
        <!-- TODO -->
        <img class="movie_poster" v-if="movie.poster_path === null">
        <img class="movie_poster" :src="img + '/original/' + movie.poster_path" v-else>
      </div>

      <div class="movie-title" v-if="movie.media_type === 'movie'">
        <h5 class="title">{{ movie.title }}</h5>
        <h6 class="original_title">{{ movie.original_title }}</h6>
      </div>

      <div class="movie-title" v-else-if="movie.media_type === 'tv'">
        <h5 class="title">{{ movie.name }}</h5>
        <h6 class="original_title">{{ movie.original_name }}</h6>
      </div>

      <img class="language_flag" :src="`https://unpkg.com/language-icons/icons/${movie.original_language}.svg`">
      <span class="vote">Vote: {{ getStarVote(movie.vote_average) }}</span>
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
