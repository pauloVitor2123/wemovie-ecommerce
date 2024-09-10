"use client";
import { CartProvider } from "@/contexts/CartContext";
import { MovieProvider } from "@/contexts/MovieContext";
import { Store } from "@/pages/store";
import { api } from "@/services/api";

export default function Main() {
  return (
    <CartProvider>
      <MovieProvider apiService={api}>
        <Store />
      </MovieProvider>
    </CartProvider>
  );
}
