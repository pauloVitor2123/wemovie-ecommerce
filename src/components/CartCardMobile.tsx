import { FunctionComponent } from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { formatCurrencyBRL } from "@/utils/utils";
import { InputNumber } from "./quantityInput/InputNumber";
import { CartItem } from "@/@types/cart";

interface CartCardMobileProps {
  item: CartItem;
  isLastCart: boolean;
  handleDecrease: (itemId: number, quantity: number) => void;
  handleQuantityChange: (itemId: number, value: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  removeFromCart: (itemId: number) => void;
}

export const CartCardMobile: FunctionComponent<CartCardMobileProps> = ({
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
      className={`flex items-center gap-4 py-4 ${isLastCart ? "border-b" : ""}`}
    >
      <Image
        width={147}
        height={188}
        src={item.image}
        alt={item.title}
        className="object-contain"
      />
      <div className="flex flex-col justify-between" style={{ width: "100%" }}>
        <div className="flex items-center justify-between">
          <div className="mb-6">
            <b className="text-lg">{item.title}</b>
          </div>
          <div className="flex">
            <b className="text-sm text-primary mr-4">
              {formatCurrencyBRL(item.price)}
            </b>
            <FaTrash
              size={18}
              onClick={() => removeFromCart(item.id)}
              className="text-button-background-blue cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
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
          <div className="flex flex-col items-center justify-center mt-6">
            <b className="text-center text-primary-light">SUBTOTAL</b>
            <b className="text-lg">
              {formatCurrencyBRL(item.price * item.quantity)}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};
