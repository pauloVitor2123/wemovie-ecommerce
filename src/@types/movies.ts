export type Movie = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export type MoviesResponse = {
  movies: Movie[];
};
