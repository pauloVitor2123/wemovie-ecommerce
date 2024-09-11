import { MoviesResponse } from "@/@types/movies";
import { ApiError } from "@/errors/apiError";

const BASE_URL = "https://wefit-movies.vercel.app/api";

const fetchMoviesList = async (): Promise<MoviesResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/movies`);
    const data = await response.json();
    if (!response.ok) {
      throw new ApiError(
        `Erro ao carregar filmes: ${response.statusText}`,
        response.status
      );
    }
    return { movies: data.products };
  } catch (error) {
    throw error;
  }
};

export const api = {
  fetchMoviesList,
};

export type Api = typeof api;
