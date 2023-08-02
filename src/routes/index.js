import { createRouter } from "../core/core";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";

export default createRouter([
  { path: "#/", component: Home },
  { path: "#/movie", component: MovieDetail}
]);
