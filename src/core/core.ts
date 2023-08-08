// Component //
import { IComponentPayload, IRoute, IQuery } from "../types/coreTypes";

export class Component {
  el
  state
  props
  constructor(payload:IComponentPayload = {}) {
    const { tagName = "div", state = {}, props = {} } = payload;
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;
    this.render(); //상속한 render함수를 바로 동작시킨다.
  }

  render() {
    //상속해서 사용할 부분
  }
}

// Router //
function routeRender(routes: IRoute[]) {
  if (!location.hash) {
    history.replaceState(null, "", "/#/");
  }
  // https://localhost:1234/#/about?name=heropy
  // #/about?name=heropy
  const routerView = document.querySelector("router-view");
  if(!routerView) {
    return;
  }
  const [hash, queryString = ""] = location.hash.split("?");
  const query = queryString.split("&").reduce((acc: IQuery, cur) => {
    const [key, value] = cur.split("=");
    acc[key] = value;
    return acc;
  }, {} as IQuery);
  history.replaceState(query, ""); //세번째 인수가 비워져 있으면 히스토리의 state에 첫번째 인수가 저장
  const currentRoute = routes.find(
    (e) => new RegExp(`${e.path}/?$`).test(hash) //routes 중 hash값과 일치하는 컴포넌트 찾음
  );
  routerView.innerHTML = "";
  currentRoute && routerView.append(new currentRoute.component().el); //렌더링
  window.scrollTo(0, 0);
}

export function createRouter(routes: IRoute[]) {
  return function () {
    window.addEventListener("popstate", () => {
      routeRender(routes);
    });
    routeRender(routes);
  };
}

// Store //
export class Store {
  constructor(state) {
    this.state = {};
    this.observers = {};
    for (const key in state) {
      Object.defineProperty(this.state, key, {
        get: () => state[key],
        set: (val) => {
          state[key] = val;
          if(Array.isArray(this.observers[key])) {
            this.observers[key].forEach((observer) => observer(val));
          }
        },
      });
    }
  }
  subscribe(key, cb) {
    // this.observers[key] = cb; //1개밖에 저장 못함
    Array.isArray(this.observers[key])
      ? this.observers[key].push(cb)
      : (this.observers[key] = [cb]);
  }
}
