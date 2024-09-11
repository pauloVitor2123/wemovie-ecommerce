import Image from "next/image";
import React from "react";
import { CartButton } from "./CartButton";
import { useCart } from "@/hooks/useCart";

export type Movie = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type MovieCardProps = {
  movie: Movie;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { addToCart, isInCart, updateQuantity, cartItems } = useCart();

  const handleAddToCart = () => {
    if (isInCart(movie.id)) {
      const item = cartItems.find((m) => m.id === movie.id);
      const quantityUpdated = item ? item?.quantity + 1 : 1;
      updateQuantity(movie.id, quantityUpdated);
    } else {
      addToCart({ ...movie, quantity: 1 });
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs p-4">
      <Image
        width={147}
        height={188}
        src={movie.image}
        alt={movie.title}
        className="w-full h-48 object-contain"
      />
      <div className="p-4 text-center">
        <h2 className="text-sm font-semibold mb-2">{movie.title}</h2>
        <b className="text-primary">
          {movie.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </b>
      </div>
      <CartButton
        onClick={handleAddToCart}
        quantity={cartItems.find((m) => m.id === movie.id)?.quantity}
      />
    </div>
  );
};

export default MovieCard;
