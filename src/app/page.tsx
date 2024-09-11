"use client";
import { useState } from "react";
import { Header } from "@/components/Header";
import Cart from "@/pages/cart";
import Store from "@/pages/store";

const Main = () => {
  const [isStorePage, setIsStorePage] = useState(true);

  return (
    <div className="bg-primary min-h-screen flex justify-center">
      <div className="w-full max-w-[1080px]">
        <Header
          goToCart={() => setIsStorePage(false)}
          goToMovieList={() => window.location.reload()}
        />
        {isStorePage ? <Store /> : <Cart />}
      </div>
    </div>
  );
};
export default Main;
