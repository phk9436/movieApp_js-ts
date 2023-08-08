export interface IHeaderState {
  [key: string]: unknown;
  menus: {
    name: string;
    href: string;
  }[];
}
