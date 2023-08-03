import { Component } from "../core/core";

export default class Footer extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/phk9436/movieApp_js-ts" target="_blank">GitHub Repository</a>
      </div>
      <div>
        <a href="https://github.com/phk9436" target="_blank">
          ${new Date().getFullYear()}. phk9436
        </a>
      </div>
    `;
  }
}
