import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  MOVIEDB_API:
    "https://api.themoviedb.org/3/search/multi?api_key=892e430dec807d965a1a1412c9102c0a&query=",
  MOVIEIMG_URL: "https://image.tmdb.org/t/p/",
  query: null,
  resultsList: [],
  movieVote: null,
  loading: true,
  performSearchMovie(url) {
    axios
    .get(url)
    .then((response) => {
        //console.log(store.resultsList)
        this.resultsList = response.data.results;
        this.movieLanguage = this.resultsList.movieVote;

        this.loading = false;
    })
    .catch(err => {
        console.error(err)
    });
  },
});
