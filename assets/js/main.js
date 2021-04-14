Vue.config.devtools = true;

let app = new Vue({
  el: "#root",
  data: {
    searchTitle: '',
    movies: [],
    series: [],
  },

  methods: {
    search: function() {
      // chiamata film
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=390be9a6b25f187e23b42fdb13f8ed80&query=${this.searchTitle}&language=it`)
      .then((movie) => {
        this.movies = movie.data.results;
      });

      // chiamata serie tv
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=390be9a6b25f187e23b42fdb13f8ed80&query=${this.searchTitle}&language=it`)
      .then((serie) => {
        this.series = serie.data.results;
      });
    },

    // cambio valutazione da 1-10 a 1-5
    ratingStar: function(item, index){
      const voteChange = Math.ceil(item.vote_average/2);
      if (index <= voteChange){
        return 'fas fa-star gold';
      } else {
        return 'far fa-star';
      }
    }
  },
});
