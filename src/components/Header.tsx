import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center bg-primary p-4 px-9">
      <b className="text-white text-xl font-bold cursor-pointer">WeMovies</b>
      <div className="flex items-center cursor-pointer">
        <div className="mr-4 text-white text-end">
          <div className="text-sm font-bold hidden md:block">Meu Carrinho</div>
          <div className="text-xs text-primary-light">2 itens</div>
        </div>
        <div className="w-6 h-6">
          <Image
            width={24}
            height={24}
            src="/assets/icons/cart.svg"
            alt="Cart Icon"
            className="w-full h-full"
          />
        </div>
      </div>
    </header>
  );
};
