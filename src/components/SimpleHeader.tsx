import Link from "next/link";

export const SimpleHeader: React.FC = () => {
  return (
    <header className="flex justify-between items-center bg-primary p-4 px-0">
      <div className="cursor-pointer flex items-center">
        <Link href={`/`} aria-label="redirect">
          <b className="text-white text-xl font-bold ">WeMovies</b>
        </Link>
      </div>
    </header>
  );
};
