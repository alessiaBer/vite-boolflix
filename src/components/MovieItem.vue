<script>
export default {
    name: 'MovieItem',
    props: {
        movies: Array
    }
};
</script>
<template>
  <div class="col" v-for="movie in movies">
    <div class="card">
        <h5 class="title">{{ movie.title }}</h5>
        <h6 class="original_title">{{ movie.original_title }}</h6>
        <img class="language_flag" :src="`https://unpkg.com/language-icons/icons/${movie.original_language}.svg`">
        <span class="vote">Vote: {{ movie.vote_average }}</span>
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
