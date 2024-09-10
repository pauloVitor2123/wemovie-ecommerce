import { FunctionComponent } from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { formatCurrencyBRL } from "@/utils/utils";
import { InputNumber } from "./quantityInput/InputNumber";
import { CartItem } from "@/@types/cart";

interface CartCardProps {
  item: CartItem;
  isLastCart: boolean;
  handleDecrease: (itemId: number, quantity: number) => void;
  handleQuantityChange: (itemId: number, value: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  removeFromCart: (itemId: number) => void;
}

export const CartCard: FunctionComponent<CartCardProps> = ({
  item,
  isLastCart,
  handleDecrease,
  handleQuantityChange,
  updateQuantity,
  removeFromCart,
}) => {
  return (
    <div
      key={item.id}
      className={`grid grid-cols-5 gap-4 py-4 ${isLastCart ? "border-b" : ""}`}
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
        <InputNumber item={item} handleQuantityChange={handleQuantityChange} />
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
  );
};
