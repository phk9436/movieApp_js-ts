import { Component } from "./core/core";
import Header from "./components/Header";

export default class App extends Component {
  constructor() {
    super({
      tagName: "div", //payload로 상속된 변수 할당
    }); //상속 시 작성
  }
  render() {
    //상속된 render 메서드를 작성한다.
    const routerView = document.createElement("router-view"); //중간에 -를 넣어야 함
    const header = new Header().el;
    this.el.append(header, routerView);
  }
}
