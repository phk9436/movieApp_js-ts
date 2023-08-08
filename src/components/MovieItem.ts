import { Component } from "../core/core";
import { IMovieItemProps } from "../types/components/movieItemTypes";

export default class MovieItem extends Component {
  props!: IMovieItemProps;
  constructor(props: IMovieItemProps) {
    //인수로 props를 받아서
    super({
      props, //부모 class에 올려보낸다.
      tagName: "a",
    });
  }
  render() {
    const { movie } = this.props;

    this.el.setAttribute("href", `#/movie?id=${movie.imdbID}`);
    this.el.classList.add("movie");
    this.el.style.backgroundImage = `url(${movie.Poster})`;
    this.el.innerHTML = /* html */ `
      <div class="info">
        <div class="year">
          ${movie.Year}
        </div>
        <div class="title">
          ${movie.Title}
        </div>
      </div>
    `;
  }
}
