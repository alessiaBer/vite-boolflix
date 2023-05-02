<script>
export default {
  name: "TrendItem",
  props: {
    item: Object,
    img: String
  },
  data() {
    return {
    };
  },
  methods: {
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
  <div class="col">
    <div
      class="card my-2">
      <div class="card_img">
        <img :src="img + 'original' + item.backdrop_path">
      </div>
      <div class="card__body">
          <h6 v-if="item.title">{{ item.title }}</h6>
          <h6 v-if="item.name">{{ item.name }}</h6>

        <div class="votation d-inline-block">
          <font-awesome-icon
            icon="fa-solid fa-star"
            v-for="n in getVoteIn5(item.vote_average)"
          />
          <font-awesome-icon
            icon="fa-regular fa-star"
            v-for="n in getEmptyStar(getVoteIn5(item.vote_average))"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/common' as *;
.card {
  background-color: transparent;
  .card_img {
  img {
    width: 100%;
  }
}
.card__body {
  padding: 1rem 0.5rem;
  color: $lighter;
  h6 {
    margin-bottom: 0;
  }
  .votation {
    font-size: 0.6rem;
  }
}
}

</style>
