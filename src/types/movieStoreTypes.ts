export interface IMovieState {
  searchText: string;
  page: number;
  pageMax: number;
  movies: IMovie[];
  movie: IMovieDetail;
  isLoading: boolean;
  message: string;
}

export interface IMovieDetail {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface IMovie {
  Poster: string;
  TItle: string;
  Type: string;
  Year: string;
  imdbID: string;
}
