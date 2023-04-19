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
        console.log(response)
      });
    },
    },
    computed: {
      joinQuery() {
        const join_query = store.query.split(" ").join("+");
        const search_url = store.MOVIE_API + `${join_query}`;

        return search_url;
      },
    },
  
};
</script>
<template>
  <SearchBox @search-movie="performSearchMovie(joinQuery)" />
  <div class="card"></div>
</template>

<style lang="scss" scoped></style>
