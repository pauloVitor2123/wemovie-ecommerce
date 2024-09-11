"use client";
import { FunctionComponent } from "react";
import { useCart } from "@/hooks/useCart";
import { EmptyState } from "@/components/EmptyState";
import CartSummary from "./CartSummary";
import { CartCard } from "./CartCard";
import { CartCardMobile } from "./CartCardMobile";

export const CartContent: FunctionComponent = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  if (cartItems.length === 0) {
    return <EmptyState />;
  }

  const handleDecrease = (itemId: number, quantity: number) => {
    if (quantity === 1) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, quantity - 1);
    }
  };

  const handleQuantityChange = (itemId: number, value: number) => {
    if (value > 0) {
      updateQuantity(itemId, value);
    }
  };

  return (
    <div className="w-full p-6 bg-white rounded-md shadow-md">
      <div className="hidden md:block">
        <div className="grid grid-cols-5 gap-4 md:grid mb-4 text-primary-light">
          <b className="text-left col-span-2">PRODUTO</b>
          <b className="text-center">QTD</b>
          <b className="text-center">SUBTOTAL</b>
          <b></b>
        </div>
      </div>

      {cartItems.map((item, index) => (
        <>
          <div className="hidden md:block" key={`first-${index}`}>
            <CartCard
              key={item.id}
              item={item}
              isLastCart={index === cartItems.length - 1}
              handleDecrease={handleDecrease}
              handleQuantityChange={handleQuantityChange}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          </div>
          <div className="md:hidden" key={`second-${index}`}>
            <CartCardMobile
              key={item.id}
              item={item}
              isLastCart={index === cartItems.length - 1}
              handleDecrease={handleDecrease}
              handleQuantityChange={handleQuantityChange}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          </div>
        </>
      ))}

      <CartSummary cartItems={cartItems} />
    </div>
  );
};
