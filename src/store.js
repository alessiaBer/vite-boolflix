import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  MOVIEDB_API:
    "https://api.themoviedb.org/3/search/multi?api_key=892e430dec807d965a1a1412c9102c0a&query=",
  MOVIEIMG_URL: "https://image.tmdb.org/t/p/",
  GETINFO_API: "https://api.themoviedb.org/3/",
  GETGENRES_API: 'https://api.themoviedb.org/3/genre/movie/list',
/*  GET_CREDITS_API: 'https://api.themoviedb.org/3/movie/{movie-id}?api_key=<<api_key>>', 
   GET_DETAILS_API: 'https://api.themoviedb.org/3/movie/{movie-id}/credits?api_key=<<api_key>>',
  GET_TV_INFO: 'https://api.themoviedb.org/3/tv/{tv_id}/credits?api_key=<<api_key>>'*/
  apiKey: '?api_key=892e430dec807d965a1a1412c9102c0a&',
  /* mediaType: '',
  movieId: null, 
  player: '', */
  list: [],
  genreList: [],
  entireCast: [],
  showCast: [],
  query: '',
  resultsList: [],
  movieVote: null,
  loading: true,
  activeProfile: null,
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
    .catch(err => {
        console.error(err)
    });
  },
  performGetInfo(mediaType, movieId) {
    const credits_url = `${this.GETINFO_API + mediaType }/${ movieId }/credits${this.apiKey}`
    axios.get(credits_url)
    .then((response) => {
      this.entireCast = response.data.cast
      /* console.log(this.cast) */
      /* for loop push in array 5 players */
      for(let i = 0; i < 5; i++) {
        const player = this.entireCast[i].name;
        this.showCast.push(player);
      }
    })
    .catch(err => {
      console.error(err)
    });
  this.showCast = []
  },
  /**
   * 
   * @param {Array} movieGenreId
   */
  performGetGenres(movieGenreId) {
    const genres_url = `${this.GETGENRES_API + this.apiKey}`
    axios.get(genres_url)
    .then(response => {
      this.genreList = response.data.genres
      console.log(this.genreList)
    
     for (let i = 0; i < this.genreList.length; i++) {
        const genresObj = this.genreList[i]

        console.log(genresObj)
        console.log(genresObj.name, genresObj.id)

        return genresObj
      }

      for (let i = 0; i < movieGenreId.length; i++) {
        const idd = movieGenreId[i]

        console.log(idd)

        if (movieGenreId.includes(genresObj.id)) {
          this.newgenresObj
        }
      }
    console.log(movieGenreId)
    })


    .catch(err => {
      console.error(err)
    });
  }
});
