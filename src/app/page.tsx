"use client";
import { useState } from "react";
import { Header } from "@/components/Header";
import { CartProvider } from "@/contexts/CartContext";
import { MovieProvider } from "@/contexts/MovieContext";
import { Cart } from "@/pages/cart";
import { Store } from "@/pages/store";
import { api } from "@/services/api";

export default function Main() {
  const [isStorePage, setIsStorePage] = useState(true);

  return (
    <CartProvider>
      <MovieProvider apiService={api}>
        <div className="bg-primary min-h-screen flex justify-center">
          <div className="w-full max-w-[1080px]">
            <Header
              goToCart={() => setIsStorePage(false)}
              goToMovieList={() => setIsStorePage(true)}
            />
            {isStorePage ? <Store /> : <Cart />}
          </div>
        </div>
      </MovieProvider>
    </CartProvider>
  );
}
