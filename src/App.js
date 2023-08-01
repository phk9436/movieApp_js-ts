import { Component } from "./core/core";

export default class App extends Component {
  constructor() {
    super({
      tagName: "h1", //payload로 상속된 변수 할당
      state: {
        inputText: "",
      },
    }); //상속 시 무조건 작성
  }
  render() {
    //상속된 render 메서드를 작성한다.
    this.el.classList.add("search");
    this.el.innerHTML = /*html*/ `
      <input type="text" />
      <button type="button">Click!</button>
    `;

    const inputEl = this.el.querySelector("input");
    inputEl.addEventListener("input", () => {
      this.state.inputText = inputEl.value;
    });

    const buttonEl = this.el.querySelector("button");
    buttonEl.addEventListener("click", () => {
      console.log(this.state.inputText);
    });
  }
}
