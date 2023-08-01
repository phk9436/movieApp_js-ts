// Component //
export class Component {
  constructor(payload = {}) {
    const { tagName = "div", state = {} } = payload;
    this.el = document.createElement(tagName);
    this.state = state;
    this.render(); //상속한 render함수를 바로 동작시킨다.
  }

  render() {
    //상속해서 사용할 부분
  }
}
