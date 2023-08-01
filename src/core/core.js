// Component //
export class Component {
  constructor(payload = {}) {
    const { tagName = "div" } = payload;
    this.el = document.createElement(tagName);
    this.render(); //상속한 render함수를 바로 동작시킨다.
  }
  
  render() { //상속해서 사용할 부분

  }
}
