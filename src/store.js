import { reactive } from 'vue'

export const store = reactive({
    MOVIE_API: 'https://api.themoviedb.org/3/search/movie?api_key=892e430dec807d965a1a1412c9102c0a&query=',
    query: null,
})