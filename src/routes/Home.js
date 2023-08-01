import { Component } from "../core/core";

export default class Home extends Component {
  constructor() {
    super();
  }
  render() {
    this.el.innerHTML = /* html */ `
      <h1>Home</h1>
    `;
  }
}
