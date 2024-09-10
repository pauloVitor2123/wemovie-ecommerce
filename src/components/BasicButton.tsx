import { MdOutlineAddShoppingCart } from "react-icons/md";

type BasicButtonProps = {
  quantity?: number;
  onClick: () => void;
};

export const BasicButton: React.FC<BasicButtonProps> = ({
  onClick,
  quantity = 0,
}: BasicButtonProps) => {
  return (
    <div
      className={`w-full flex items-center justify-center h-10 ${
        quantity > 0 ? "bg-green" : "bg-button-background-blue"
      } rounded-md py-2 px-3 gap-3 text-center text-xs font-bold text-white cursor-pointer`}
      onClick={onClick}
    >
      <div className="relative w-6 h-4">
        <MdOutlineAddShoppingCart size={14} />
        <div className="absolute top-0 left-4 w-2 h-4 inline-block">
          {quantity}
        </div>
      </div>
      <p className="flex-shrink-0 font-semibold">ADICIONAR AO CARRINHO</p>
    </div>
  );
};
