import Image from "next/image";
import React from "react";
import { BasicButton } from "./BasicButton";

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
      <BasicButton />
    </div>
  );
};

export default MovieCard;
