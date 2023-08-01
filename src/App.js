import { Component } from "./core/core";

export default class App extends Component {
  constructor() {
    super({
      tagName: "div", //payload로 상속된 변수 할당
      state: {
        fruits: [
          { name: "Apple", price: 1000 },
          { name: "Banana", price: 2000 },
          { name: "Orange", price: 3000 },
        ],
      },
    }); //상속 시 작성
  }
  render() {
    //상속된 render 메서드를 작성한다.
    this.el.innerHTML = /*html*/ `
      <h1>Fruites</h1>
      <ul>
        ${this.state.fruits
          .filter((el) => el.price < 3000)
          .map((el) => `<li>name: ${el.name}, price: ${el.price}</li>`)
          .join("")}
      </ul>
    `;
  }
}
