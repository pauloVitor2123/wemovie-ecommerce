import React from "react";
import "./inputStyles.css";
import { CartItem } from "@/@types/cart";

type InputNumberProps = {
  item: CartItem;
  handleQuantityChange: (itemId: number, quantity: number) => void;
};

export const InputNumber: React.FC<InputNumberProps> = ({
  item,
  handleQuantityChange,
}: InputNumberProps) => {
  return (
    <input
      type="number"
      value={item.quantity}
      onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
      className="w-16 text-center border border-gray-300 rounded"
    />
  );
};
