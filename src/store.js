import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  MOVIEDB_API:
    "https://api.themoviedb.org/3/search/multi?api_key=892e430dec807d965a1a1412c9102c0a&query=",
  MOVIEIMG_URL: "https://image.tmdb.org/t/p/",
  GETINFO_API: "https://api.themoviedb.org/3/",
  GETGENRES_API: "https://api.themoviedb.org/3/genre/movie/list",
  GENRES_TV: "https://api.themoviedb.org/3/genre/tv/list",
  apiKey: "?api_key=892e430dec807d965a1a1412c9102c0a&",
  genresList: {
    tvGenres: null,
    moviesGenres: null
  },
  entireCast: [],
  showCast: [],
  query: "",
  resultsList: [],
  movieVote: null,
  loading: true,
  performSearchMovie(url) {
    axios
      .get(url)
      .then((response) => {
        //console.log(store.resultsList)
        this.resultsList = response.data.results;
        /* this.mediaType = response.data.results.media_type
        this.movieId = response.data.results.id; */
        this.loading = false;
      })
      .catch((err) => {
        console.error(err);
      });
  },

  performGetInfo(mediaType, movieId) {
    const credits_url = `${this.GETINFO_API + mediaType}/${movieId}/credits${
      this.apiKey
    }`;
    axios
      .get(credits_url)
      .then((response) => {
        this.entireCast = response.data.cast;
        /* console.log(this.cast) */
        /* for loop push in array 5 players */
        for (let i = 0; i < 5; i++) {
          const player = this.entireCast[i].name;
          this.showCast.push(player);
        }
      })
      .catch((err) => {
        console.error(err);
      });
    this.showCast = [];
  },





  getTvGenres() {
    const tvGenresUrl = `${this.GENRES_TV + this.apiKey}`;
    return axios.get(tvGenresUrl)
  },
  getMovieGenres() {
    const movieGenresUrl = `${this.GETGENRES_API + this.apiKey}`;
    return axios.get(movieGenresUrl)
  },

  performGetGenres() {
    Promise.all([this.getTvGenres(), this.getMovieGenres()])
    .then(([tv, movie]) => {
      this.genresList.tvGenres = tv.data
      this.genresList.moviesGenres = movie.data

      console.log(this.genresList)
    })
  },
});
