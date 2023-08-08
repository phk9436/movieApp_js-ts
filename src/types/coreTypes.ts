import { Component } from "../core/core";

export interface IComponentPayload {
  tagName?: string;
  props?: {
    [key: string]: unknown;
  };
  state?: {
    [key: string]: unknown;
  };
}

export interface IRoute {
  path: string;
  component: typeof Component;
}

export interface IQuery {
  [key: string]: string;
}
