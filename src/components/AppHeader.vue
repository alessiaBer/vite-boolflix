<script>
import SearchBox from "./SearchBox.vue";
import { store } from "../store";
import axios from "axios";
export default {
  name: "AppHeader",
  components: {
    SearchBox,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    performSearchMovie(url) {
      axios.get(url).then((response) => {
        const join_query = store.query.split(' ').join("+");
        const search_url = url + `${join_query}`;
        console.log(search_url)
      });
    },
  },
};
</script>
<template>
  <SearchBox @search-movie="performSearchMovie(store.MOVIE_API)" />
</template>

<style lang="scss" scoped></style>
