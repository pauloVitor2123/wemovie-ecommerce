"use client";
import { useState } from "react";
import { Header } from "@/components/Header";
import { CartProvider } from "@/contexts/CartContext";
import Cart from "@/pages/cart";
import Store from "@/pages/store";

function MainComponent() {
  const [isStorePage, setIsStorePage] = useState(true);

  return (
    <div className="bg-primary min-h-screen flex justify-center">
      <div className="w-full max-w-[1080px]">
        <Header
          goToCart={() => setIsStorePage(false)}
          goToMovieList={() => setIsStorePage(true)}
        />
        {isStorePage ? <Store /> : <Cart />}
      </div>
    </div>
  );
}

export default function Main() {
  return (
    <CartProvider>
      <MainComponent />
    </CartProvider>
  );
}
