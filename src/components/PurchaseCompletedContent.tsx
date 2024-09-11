"use client";
import Image from "next/image";
import { BasicButton } from "./BasicButton";
import { useRouter } from "next/navigation";

export const PurchaseCompletedContent: React.FC = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  return (
    <div className="w-full relative rounded-md bg-white flex flex-col items-center justify-start p-16 box-border gap-6 text-center text-2xl text-[#2f2e41] font-sans mt-6 max-w-[1080px] ">
      <b className="w-[352px] relative flex items-center justify-center h-[35px] shrink-0 mb-6">
        Compra realizada com sucesso!
      </b>
      <Image
        width={295}
        height={307}
        alt=""
        src="/assets/images/purchase_completed.png"
      />
      <BasicButton text="VOLTAR" onClick={goToHome} />
    </div>
  );
};
