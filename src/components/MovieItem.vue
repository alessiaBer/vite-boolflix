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
        <span class="language d-block">{{ movie.original_language }}</span>
        <span class="vote d-block">{{ movie.vote_average }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
