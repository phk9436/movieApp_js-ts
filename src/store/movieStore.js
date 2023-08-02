import { Store } from "../core/core";

const movieStore = new Store({
  searchText: "",
  page: 1,
  movies: [],
});

export default movieStore;

export const searchMovies = async (page) => {
  if (page === 1) {
    movieStore.state.page = 1;
    movieStore.state.movies = [];
  }
  const res = await fetch(
    `https://omdbapi.com?apikey=7035c60c&s=${movieStore.state.searchText}&page=${page}`
  );
  const { Search } = await res.json();
  movieStore.state.movies = [...movieStore.state.movies, ...Search];
};
