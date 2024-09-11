"use client";
import { EmptyState } from "@/components/EmptyState";
import { MovieList } from "@/components/MovieList";
import { Spinner } from "@/components/Spinner";
import { MovieProvider } from "@/contexts/MovieContext";
import { useMovies } from "@/hooks/useMovies";
import { api } from "@/services/api";

const StoreCompontent = () => {
  const { movies, loading } = useMovies();

  return (
    <div className="w-full flex flex-col items-center justify-start p-10 box-border">
      {loading ? (
        <Spinner />
      ) : movies.length ? (
        <MovieList movies={movies} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

const Store = () => {
  return (
    <MovieProvider apiService={api}>
      <StoreCompontent />
    </MovieProvider>
  );
};

export default Store;
