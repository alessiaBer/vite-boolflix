import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  MOVIEDB_API: "https://api.themoviedb.org/3/",
  MULTI_API:
    "https://api.themoviedb.org/3/search/multi?api_key=892e430dec807d965a1a1412c9102c0a&query=",
  MOVIEDB_IMG: "https://image.tmdb.org/t/p/",
  apiKey: "?api_key=892e430dec807d965a1a1412c9102c0a&",
  genresList: {
    tvGenres: null,
    moviesGenres: null
  },
  trendingsList: {
    tvTrends: null,
    movieTrends: null
  },
  entireCast: [],
  showedCast: [],
  query: "",
  resultsList: [],
  movieVote: null,
  loading: true,
  genresList: [],
  itemGenresList: [],
  selectedType: null,
  selectedGenre: null,
  /**
   * function to get movies/series
   * @param {String} url 
   */
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

  /**
   * function to get cast and genres of the item 
   * @param {String} mediaType if the item is a movie or a series
   * @param {Number} itemId the id of the item in moviedb
   */
  performGetInfo(mediaType, itemId) {
    const credits_url = `${this.MOVIEDB_API + mediaType}/${itemId}/credits${
      this.apiKey
    }`;
    const detailsUrl = `${this.MOVIEDB_API + mediaType}/${itemId + this.apiKey
    }`
    axios
      .get(credits_url)
      .then((response) => {
        this.entireCast = response.data.cast;
        for (let i = 0; i < 5; i++) {
          const player = this.entireCast[i].name;
          this.showedCast.push(player);
        }
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get(detailsUrl)
      .then((response) => {
        const genresObject = response.data.genres
        for (let i = 0; i < genresObject.length; i++) {
          this.itemGenresList.push(genresObject[i].name.valueOf())
        }
      })
    this.showedCast = [];
    this.itemGenresList = [];
  },


  /** functions for multiple concurrent requests
  * requesting movies genres list and tv genres list
  */
  getTvGenres() {
    const tvGenresUrl = `${this.MOVIEDB_API}genre/tv/list${this.apiKey}`;
    return axios.get(tvGenresUrl)
  },
  getMovieGenres() {
    const movieGenresUrl = `${this.MOVIEDB_API}genre/movie/list${this.apiKey}`;
    return axios.get(movieGenresUrl)
  },
  performGetGenres() {
    Promise.all([this.getTvGenres(), this.getMovieGenres()])
    .then(([tv, movie]) => {
      this.genresList.tvGenres = tv.data
      this.genresList.moviesGenres = movie.data

      console.log(this.genresList)
    })
    .catch((err) => {
      console.error(err);
    })
  },

  getTvTrendings() {
    const tvTrends = `${this.MOVIEDB_API}trending/tv/week${this.apiKey}`
    return axios.get(tvTrends)
  },
  getMovieTrendings() {
    const movieTrends = `${this.MOVIEDB_API}trending/movie/week${this.apiKey}`
    return axios.get(movieTrends)
  },
  performTrendings() {
    Promise.all([this.getTvTrendings(), this.getMovieTrendings()])
    .then(([tv, movie]) => {
      this.trendingsList.tvTrends = tv.data
      this.trendingsList.movieTrends = movie.data
    })
    .catch((err) => {
      console.error(err);
    })
  }
});

