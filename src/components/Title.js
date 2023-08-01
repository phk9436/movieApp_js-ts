import { Component } from "../core/core";
import messageStore from "../store/message";

export default class Title extends Component {
  constructor() {
    super({
      tagName: "h2",
    });
    messageStore.subscribe("message", (value) => {
      console.log(value);
      this.render();
    });
  }
  render() {
    this.el.textContent = `Title: ${messageStore.state.message}`;
  }
}
