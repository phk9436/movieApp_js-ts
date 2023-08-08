export interface IComponentPayload {
  tagName?: string;
  props?: {
    [key: string]: unknown
  };
  state?: {
    [key: string]: unknown
  };
}
