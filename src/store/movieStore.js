import { Store } from "../core/core";

const movieStore = new Store({
  searchText: "",
  page: 1,
  pageMax: 1,
  movies: [],
  isLoading: false,
});

export default movieStore;

export const searchMovies = async (page) => {
  movieStore.state.isLoading = true;
  movieStore.state.page = page;
  if (page === 1) {
    movieStore.state.movies = [];
  }
  const res = await fetch(
    `https://omdbapi.com?apikey=7035c60c&s=${movieStore.state.searchText}&page=${page}`
  );
  const { Search, totalResults } = await res.json();
  movieStore.state.movies = [...movieStore.state.movies, ...Search];
  movieStore.state.pageMax = Math.ceil(Number(totalResults) / 10);
  movieStore.state.isLoading = false;
};
