import { PurchaseCompletedContent } from "@/components/PurchaseCompletedContent";
import { SimpleHeader } from "@/components/SimpleHeader";
import { NextPage } from "next";

const PurchaseCompleted: NextPage = () => {
  return (
    <div className="bg-primary min-h-screen flex justify-center ">
      <div className="w-full max-w-[1080px] px-8">
        <SimpleHeader />
        <PurchaseCompletedContent />
      </div>
    </div>
  );
};

export default PurchaseCompleted;
