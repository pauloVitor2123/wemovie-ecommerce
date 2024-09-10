import { Movie } from "@/@types/movies";
import React from "react";
import MovieCard from "./MovieCard";

type MovieListProps = {
  movies: Movie[];
};

export const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
