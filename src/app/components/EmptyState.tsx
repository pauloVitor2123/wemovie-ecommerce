"use client";
import Image from "next/image";

export const EmptyState: React.FC = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white p-16 rounded-md text-center text-primary-dark font-sans">
      <div className="flex flex-col items-center mb-8 ">
        <p className="text-lg mb-4 font-bold">
          Parece que não há nada por aqui :(
        </p>
        <div className="flex flex-col items-center mb-8 ">
          <Image
            src="/assets/images/empty_state.png"
            alt="Parece que não há nada por aqui"
            width={264}
            height={264}
          />
        </div>
        <div
          className="bg-border mb-6"
          style={{ height: "2px", width: "150%", marginTop: "-32px" }}
        ></div>
        <button
          onClick={handleReload}
          className="bg-button-background-blue text-button-background-white text-xs font-bold py-2 px-8 rounded-md"
        >
          Recarregar página
        </button>
      </div>
    </div>
  );
};
