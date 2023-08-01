import { Component } from "../core/core";
import TextField from "../components/TextField";
import Message from "../components/Message";

export default class Home extends Component {
  constructor() {
    super();
  }
  render() {
    this.el.innerHTML = /* html */ `
      <h1>Home</h1>
    `;
    this.el.append(new TextField().el, new Message().el);
  }
}
