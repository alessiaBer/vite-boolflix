import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  MOVIEDB_API:
    "https://api.themoviedb.org/3/search/multi?api_key=892e430dec807d965a1a1412c9102c0a&query=",
  MOVIEIMG_URL: "https://image.tmdb.org/t/p/",
  PREVIEW_IMG: "https://image.tmdb.org/t/p/w300",
  CREDITS_API: "https://api.themoviedb.org/3/",
  GENRES_MOVIE: "https://api.themoviedb.org/3/genre/movie/list",
  GENRES_TV: "https://api.themoviedb.org/3/genre/tv/list",
  TRENDINGS_API: "https://api.themoviedb.org/3/trending/",
  apiKey: "?api_key=892e430dec807d965a1a1412c9102c0a&",
  /* genresList: {
    tvGenres: null,
    moviesGenres: null
  }, */
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
   * function to get the cast of the movie
   * @param {String} mediaType 
   * @param {Number} movieId 
   */
  performGetInfo(mediaType, movieId) {
    const credits_url = `${this.CREDITS_API + mediaType}/${movieId}/credits${
      this.apiKey
    }`;
    const detailsUrl = `${this.CREDITS_API + mediaType}/${movieId + this.apiKey
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
        const list_of_movie_genre = response.data.genres
        for (let i = 0; i < list_of_movie_genre.length; i++) {
          this.itemGenresList.push(list_of_movie_genre[i].name.valueOf())
        }
      })
    this.showedCast = [];
    this.itemGenresList = [];
  },
  /** functions for multiple concurrent requests
  * requesting movies genres list and tv genres list
  */
  /* getTvGenres() {
    const tvGenresUrl = `${this.GENRES_TV + this.apiKey}`;
    return axios.get(tvGenresUrl)
  },
  getMovieGenres() {
    const movieGenresUrl = `${this.GENRES_MOVIE + this.apiKey}`;
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
  }, */

  /* performGetGenres(movieGen) {
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=892e430dec807d965a1a1412c9102c0a')
    .then((response) => {
      this.genresList = response.data.genres
      //console.log(this.genresList)
      for (let i = 0; i < this.genresList.length; i++) {
        const single_genre = this.genresList[i]

        if(movieGen.includes(single_genre.id.valueOf())) {
          this.list_of_movie_genre.push(single_genre.name.valueOf())
        }
      } 
    })
    this.list_of_movie_genre = []
  },
 */
  getTvTrendings() {
    const tvTrends = `${this.TRENDINGS_API}tv/week${this.apiKey}`
    return axios.get(tvTrends)
  },
  getMovieTrendings() {
    const movieTrends = `${this.TRENDINGS_API}movie/week${this.apiKey}`
    return axios.get(movieTrends)
  },
  performTrendings() {
    Promise.all([this.getTvTrendings(), this.getMovieTrendings()])
    .then(([tv, movie]) => {
      this.trendingsList.tvTrends = tv.data
      this.trendingsList.movieTrends = movie.data

      console.log(this.trendingsList)
    })
    .catch((err) => {
      console.error(err);
    })
  }
});
