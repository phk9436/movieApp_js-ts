import { IMovie } from "../movieStoreTypes";

export interface IMovieItemProps {
  [key: string]: unknown;
  movie: IMovie;
}
