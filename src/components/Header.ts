import { Component } from "../core/core";
import { IHeaderState } from "../types/components/headerTypes";

export default class Header extends Component {
  state!: IHeaderState; //! = 할당 단언, 초기화 한 것처럼 처리
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          {
            name: "Seach",
            href: "#/",
          },
          {
            name: "Movie",
            href: "#/movie?id=tt4520988",
          },
        ],
      },
    });
    window.addEventListener("popstate", () => {
      this.render();
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a href="#/" class="logo"><span>OMDbAPI</span>.COM</a>
      <nav>
        <ul>
          ${this.state.menus
            .map((e) => {
              const href = e.href.split("?")[0];
              const hash = location.hash.split("?")[0];
              const isActive = href === hash;
              return /*html*/ `
                <li>
                  <a href="${e.href}" class="${isActive ? "active" : ""}">${
                e.name
              }</a>
                </li>
              `;
            })
            .join("")}
        </ul>
      </nav>
      <a href="https://github.com/phk9436" class="user" target="_blank">
        <img src="https://heropy.blog/css/images/logo.png" alt="User" />
      </a>
    `;
  }
}
