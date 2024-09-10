import { MovieContext } from "@/contexts/MovieContext";
import { useContext } from "react";

export const useMovies = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("useMovies must be used within a MovieProvider");
  }
  return context;
};
