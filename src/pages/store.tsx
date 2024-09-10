"use client";
import { useEffect, useState } from "react";
import { EmptyState } from "@/components/EmptyState";
import { Header } from "@/components/Header";
import { MovieList } from "@/components/MovieList";
import { Spinner } from "@/components/Spinner";
import { api } from "@/services/api";
import { Movie } from "@/@types/movies";

export const Store = () => {
  const [moviesData, setMoviesData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await api.fetchMoviesList();
        setMoviesData(data.movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="bg-primary min-h-screen flex justify-center">
      <div className="w-full max-w-[1080px]">
        <Header />
        <div className="w-full flex flex-col items-center justify-start p-10 box-border">
          {loading ? (
            <Spinner />
          ) : moviesData?.length ? (
            <MovieList movies={moviesData} />
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
};
