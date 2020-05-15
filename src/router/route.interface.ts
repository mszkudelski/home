export interface Route {
  route: string;
  name: string;
  render?: Function;
  loaded?: boolean;
}
