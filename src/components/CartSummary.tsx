"use client";
import React from "react";
import { CartItem } from "@/@types/cart";
import { formatCurrencyBRL } from "@/utils/utils";
import { useRouter } from "next/navigation";

const CartSummary = ({ cartItems }: { cartItems: CartItem[] }) => {
  const router = useRouter();
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const goToPurchaseCompletedPage = () => {
    router.push("/purchase-completed");
  };

  return (
    <div className="flex justify-between items-center mt-6">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={goToPurchaseCompletedPage}
      >
        FINALIZAR PEDIDO
      </button>
      <div className="flex items-center space-x-4">
        <b className="text-gray-600">TOTAL</b>
        <b className="text-xl text-gray-900">{formatCurrencyBRL(total)}</b>
      </div>
    </div>
  );
};

export default CartSummary;
