import { Component } from "../core/core";
import movieStore, { searchMovies } from "../store/movieStore";

export default class Search extends Component {
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /* html */ `
      <input type="text" placeholder="Enter the movie title to search!" />
      <button class="btn btn-primary">Search!</button>
    `;

    const inputEl = this.el.querySelector("input");
    inputEl.addEventListener("input", () => {
      movieStore.state.searchText = inputEl.value;
    });
    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && movieStore.state.searchText.trim()) {
        searchMovies(1);
        movieStore.state.searchText = "";
      }
    });

    const btnEl = this.el.querySelector("button");
    btnEl.addEventListener("click", () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1);
        movieStore.state.searchText = "";
      }
    });
  }
}
