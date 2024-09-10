"use client";
import { EmptyState } from "@/components/EmptyState";
import { Header } from "@/components/Header";
import { MovieList } from "@/components/MovieList";
import { Spinner } from "@/components/Spinner";
import { useMovies } from "@/hooks/useMovies";

export const Store = () => {
  const { movies, loading } = useMovies();

  return (
    <div className="bg-primary min-h-screen flex justify-center">
      <div className="w-full max-w-[1080px]">
        <Header />
        <div className="w-full flex flex-col items-center justify-start p-10 box-border">
          {loading ? (
            <Spinner />
          ) : movies.length ? (
            <MovieList movies={movies} />
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
};
