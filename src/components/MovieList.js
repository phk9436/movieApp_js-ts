import { Component } from "../core/core";
import movieStore from "../store/movieStore";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe("movies", () => {
      this.render();
    });
    movieStore.subscribe("isLoading", () => {
      this.render();
    });
    movieStore.subscribe("message", () => {
      this.render();
    })
  }
  render() {
    this.el.classList.add("movie-list");
    this.el.innerHTML = /* html*/ `
      ${
        movieStore.state.message
          ? `<div class="message">${movieStore.state.message}</div>`
          : `<div class="movies"></div>`
      }
      <div class="the-loader hide"></div>
    `;
    const movieEl = this.el.querySelector(".movies");
    movieEl?.append(
      ...movieStore.state.movies.map((movie) => new MovieItem({ movie }).el)
    );

    const loaderEl = this.el.querySelector(".the-loader");
    movieStore.state.isLoading
      ? loaderEl.classList.remove("hide")
      : loaderEl.classList.add("hide");
  }
}
