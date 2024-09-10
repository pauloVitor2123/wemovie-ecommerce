"use client";
import { MovieProvider } from "@/contexts/MovieContext";
import { Store } from "@/pages/store";
import { api } from "@/services/api";

export default function Main() {
  return (
    <MovieProvider apiService={api}>
      <Store />
    </MovieProvider>
  );
}
