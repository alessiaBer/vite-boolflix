import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  MOVIEDB_API:
    "https://api.themoviedb.org/3/search/multi?api_key=892e430dec807d965a1a1412c9102c0a&query=",
  query: null,
  resultsList: [],
  movieTitle: null,
  movieOriginalTitle: null,
  movieLanguage: null,
  movieVote: null,
  performSearchMovie(url) {
    axios.get(url).then((response) => {
      store.resultsList = response.data.results;
      //console.log(store.resultsList)
    });
  },
});
