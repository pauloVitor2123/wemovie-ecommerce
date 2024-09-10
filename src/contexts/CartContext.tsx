"use client";

import { CartItem } from "@/@types/cart";
import { createContext, useState, ReactNode, useCallback } from "react";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (movie: CartItem) => void;
  removeFromCart: (movieId: number) => void;
  updateQuantity: (movieId: number, quantity: number) => void;
  isInCart: (movieId: number) => boolean;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((movie: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === movie.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === movie.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...movie, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((movieId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== movieId)
    );
  }, []);

  const updateQuantity = useCallback((movieId: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === movieId ? { ...item, quantity } : item
      )
    );
  }, []);

  const isInCart = useCallback(
    (movieId: number) => {
      return cartItems.some((item) => item.id === movieId);
    },
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
