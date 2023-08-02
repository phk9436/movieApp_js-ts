import { Component } from "../core/core";
import movieStore, { getMovieDetails } from "../store/movieStore";

export default class MovieDetail extends Component {
  async render() {
    await getMovieDetails(history.state.id);
    const { movie } = movieStore.state;

    this.el.classList.add("container", "the-movie");
    this.el.innerHTML = /* HTML */ `
      <div class="poster" style="background-image: url(${movie.Poster})"></div>
      <div class="specs">
        <div class="title">${movie.Title}</div>
        <div class="labels">
          <span>${movie.Released}</span>
          &nbsp;/&nbsp;
          <span>${movie.Runtime}</span>
          &nbsp;/&nbsp;
          <span>${movie.Country}</span>
        </div>
        <div class="plot">${movie.Plot}</div>
        <div>
          <h3>Ratings</h3>
          ${movie.Ratings.map((e) => `<p>${e.Source} - ${e.Value}</p>`).join(
            ""
          )}
        </div>
        <div>
          <h3>Actors</h3>
          <p>${movie.Actors}</p>
        </div>
        <div>
          <h3>Director</h3>
          <p>${movie.Director}</p>
        </div>
        <div>
          <h3>Production</h3>
          <p>${movie.Production}</p>
        </div>
        <div>
          <h3>Genre</h3>
          <p>${movie.Genre}</p>
        </div>
      </div>
    `;
  }
}
