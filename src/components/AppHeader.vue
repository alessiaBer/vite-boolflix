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
      let search_url = store.MULTI_API + `${join_query}`;

      return search_url;
    },
  },
};
</script>
<template>
  <header>
    <nav class="navbar navbar-expand-lg mx-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
            alt="Netflix"
            height="30"
            class="d-inline-block align-text-top"
          />
        </a>

        <SearchBox @search-movie="store.performSearchMovie(joinQuery)"/>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
