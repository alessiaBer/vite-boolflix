<script>
import SearchBox from "./SearchBox.vue";
import { store } from "../store";
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
  methods: {},
  computed: {
    joinQuery() {
      const join_query = store.query.split(" ").join("+");
      let search_url = store.MOVIEDB_API + `${join_query}`;

      return search_url;
    },
  }
};
</script>
<template>
  <SearchBox @search-movie="store.performSearchMovie(joinQuery)" />
</template>

<style lang="scss" scoped></style>
