import { MoviesResponse } from "@/@types/movies";
import { ApiError } from "@/errors/apiError";

const BASE_URL = "https://wefit-movies.vercel.app/api";

const fetchMoviesList = async (): Promise<MoviesResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/movies`);

    if (!response.ok) {
      throw new ApiError(
        `Erro ao carregar filmes: ${response.statusText}`,
        response.status
      );
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

export const api = {
  fetchMoviesList,
};
