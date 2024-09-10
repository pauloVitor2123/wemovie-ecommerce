import { FunctionComponent } from "react";
import { useCart } from "@/hooks/useCart";
import { EmptyState } from "@/components/EmptyState";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { formatCurrencyBRL } from "@/utils/utils";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { InputNumber } from "./quantityInput/InputNumber";
import CartSummary from "./CartSummary";

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
        <div
          key={item.id}
          className={`grid grid-cols-5 gap-4 py-4 ${
            index === cartItems.length - 1 ? "border-b" : ""
          }`}
        >
          <div className="flex items-center space-x-4 col-span-2">
            <Image
              width={147}
              height={188}
              src={item.image}
              alt={item.title}
              className="w-36 h-48 object-contain"
            />
            <div className="flex flex-col">
              <b className="text-lg mb-2">{item.title}</b>
              <b className="text-sm text-gray-600">
                {formatCurrencyBRL(item.price)}
              </b>
            </div>
          </div>
          <div className="flex items-center space-x-2 col-span-1 justify-center">
            <AiOutlineMinusCircle
              size={18}
              onClick={() => handleDecrease(item.id, item.quantity)}
              className="text-button-background-blue cursor-pointer"
            />
            <InputNumber
              item={item}
              handleQuantityChange={handleQuantityChange}
            />
            <AiOutlinePlusCircle
              size={18}
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="text-button-background-blue cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center col-span-1">
            <b className="text-lg">
              {formatCurrencyBRL(item.price * item.quantity)}
            </b>
          </div>
          <div className="flex items-center justify-end col-span-1">
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-button-background-blue"
            >
              <FaTrash size={18} />
            </button>
          </div>
        </div>
      ))}

      <CartSummary cartItems={cartItems} />
    </div>
  );
};
