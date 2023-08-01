import { Store } from "../core/core";

const movieStore = new Store({
  searchText: "",
  page: 1,
  movies: [],
});

export default movieStore;

export const searchMovies = async (page) => {
  const res = await fetch(
    `https://omdbapi.com?apikey=7035c60c&s=${movieStore.state.searchText}&page=${page}`
  );
  const json = await res.json();
  console.log(json);
};
