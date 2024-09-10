"use client";
import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { Movie } from "@/@types/movies";
import { Api, api as defaultApi } from "@/services/api";

interface MovieContextType {
  movies: Movie[];
  loading: boolean;
}

export const MovieContext = createContext<MovieContextType | undefined>(
  undefined
);

interface MovieProviderProps {
  children: ReactNode;
  apiService?: Api;
}

export const MovieProvider = ({
  children,
  apiService = defaultApi,
}: MovieProviderProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiService.fetchMoviesList();
      setMovies(data.movies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  }, [apiService]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <MovieContext.Provider value={{ movies, loading }}>
      {children}
    </MovieContext.Provider>
  );
};
