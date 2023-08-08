import { createRouter } from "../core/core";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import NotFound from "../pages/NotFound";

export default createRouter([
  { path: "#/", component: Home },
  { path: "#/movie", component: MovieDetail },
  { path: ".*", component: NotFound }, //아무 글자나 1글자 이상
]);
