import { EmptyState } from "@/components/EmptyState";
import { Header } from "@/components/Header";
import { Spinner } from "@/components/Spinner";

export default function Main() {
  return (
    <div className="bg-primary min-h-screen flex justify-center">
      <div className="w-full max-w-[1080px]">
        <Header />
        <div className="w-full flex flex-col items-center justify-start p-10 box-border">
          <Spinner />
          <EmptyState />
        </div>
      </div>
    </div>
  );
}
