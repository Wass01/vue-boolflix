Vue.config.devtools = true;

let app = new Vue({
  el: "#root",
  data: {
    searchMovie: '',
    movies: [],
  },

  methods: {
    search: function() {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=390be9a6b25f187e23b42fdb13f8ed80&query=${this.searchMovie}&language=it`)
      .then((response) => {
        this.movies = response.data.results;
      });
    }
  },
});
