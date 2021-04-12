Vue.config.devtools = true;

let app = new Vue({
  el: "#root",
  data: {
    searchMovie: '',
    movies: [],
    series: [],
  },

  methods: {
    search: function() {
      // chiamata film
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=390be9a6b25f187e23b42fdb13f8ed80&query=${this.searchMovie}&language=it`)
      .then((movie) => {
        this.movies = movie.data.results;
      });

      // chiamata serie tv
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=390be9a6b25f187e23b42fdb13f8ed80&query=${this.searchMovie}&language=it`)
      .then((serie) => {
        this.series = serie.data.results;
      });
    }
  },
});
