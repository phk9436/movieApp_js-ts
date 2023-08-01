import { Component } from "./core/core";

export default class App extends Component {
  constructor() {
    super({
      tagName: "h1", //payload로 상속된 변수 할당
    }); //상속 시 무조건 작성
  }
  render() {
    //상속된 render 메서드를 작성한다.
    this.el.textContent = "Hello, world!";
  }
}
