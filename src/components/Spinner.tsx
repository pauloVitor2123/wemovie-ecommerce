import Image from "next/image";

export const Spinner = () => {
  return (
    <Image
      className="animate-spin"
      src="/assets/images/loader.png"
      width={80}
      height={80}
      alt={"Carregando..."}
    />
  );
};
