type BasicButtonProps = {
  text: string;
  onClick: () => void;
};

export const BasicButton: React.FC<BasicButtonProps> = ({
  onClick,
  text,
}: BasicButtonProps) => {
  return (
    <div
      className="flex items-center justify-center h-10 bg-button-background-blue rounded-md py-2 px-16 gap-3 text-center text-xs font-bold text-white cursor-pointer"
      onClick={() => onClick()}
    >
      <p className="flex-shrink-0 font-semibold">{text}</p>
    </div>
  );
};
