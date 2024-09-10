import { Movie } from "@/@types/movies";

export interface CartItem extends Movie {
  quantity: number;
}
