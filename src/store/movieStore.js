import { Store } from "../core/core";

const movieStore = new Store({
  searchText: "",
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {},
  isLoading: false,
  message: "Search for the movie title!",
});

export default movieStore;

export const searchMovies = async (page) => {
  movieStore.state.isLoading = true;
  movieStore.state.page = page;
  if (page === 1) {
    movieStore.state.movies = [];
    movieStore.state.message = "";
  }
  try {
    const res = await fetch("/api/movie", {
      method: "POST", //body를 담으려면 post로 작성해야 함
      body: JSON.stringify({
        //body는 json으로 보내야 함
        title: movieStore.state.searchText,
        page,
      }),
    });
    const { Search, totalResults, Response, Error } = await res.json();
    if (Response === "True") {
      movieStore.state.movies = [...movieStore.state.movies, ...Search];
      movieStore.state.pageMax = Math.ceil(Number(totalResults) / 10);
    } else {
      movieStore.state.message = Error;
      movieStore.state.pageMax = 1;
    }
  } catch (err) {
    movieStore.state.message = err;
    movieStore.state.pageMax = 1;
  } finally {
    movieStore.state.isLoading = false;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const res = await fetch("/api/movie", {
      method: "POST",
      body: JSON.stringify({
        id,
      }),
    });
    movieStore.state.movie = await res.json();
  } catch (err) {
    console.log(err);
    movieStore.state.movie = {};
  }
};
