<script>
export default {
    name: 'CompleteProfile',
    props: {
        img: String,
        movie: Object
    }
};
</script>
<template>
  <img :src="img + 'original' + movie.backdrop_path">
</template>

<style lang="scss" scoped></style>

<!--- COLLEGARE PROPS!!! -->