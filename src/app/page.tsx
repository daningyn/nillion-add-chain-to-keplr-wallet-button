'use client';
import AddNillionNetworkButton from "@/app/components/AddNillionNetworkButton";
import { toast } from "react-toastify";

export default function Home() {
  return (
    <div className="container h-[100vh] flex flex-col justify-center items-center">
      <AddNillionNetworkButton
        addChainSuccess={async (message) => {toast.success(message)}}
        addChainFail={async (error) => {toast.error(error)}}
      >

      </AddNillionNetworkButton>
    </div>
  );
}
