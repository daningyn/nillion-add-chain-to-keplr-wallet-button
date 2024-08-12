'use client';
import AddNillionNetworkButton from "@/app/components/AddNillionNetworkButton";
import { toast } from "react-toastify";
import { StargateClient } from "@cosmjs/stargate";
import { useState } from "react";

declare global {
  interface Window {
    getOfflineSigner: any;
  }
}

export default function Home() {

  const chainId = "nillion-chain-testnet-1"
  const minimalDenom = "unil"
  const decimal = 6
  const denom = "NIL"

  const [balance, setBalance] = useState(0);

  const getBalance = async () => {
    if (window.keplr) {
      const offlineSigner = window.getOfflineSigner(chainId);
      const accounts = await offlineSigner.getAccounts();

      if (accounts.length > 0) {
        const address = accounts[0].address;
        const rpcUrl = "https://testnet-nillion-rpc.lavenderfive.com";

        try {
          const client = await StargateClient.connect(rpcUrl);
          const accountBalance = await client.getBalance(address, minimalDenom);

          const decimalBalance = parseInt(accountBalance.amount || '0') / Math.pow(10, decimal);
          setBalance(decimalBalance);

          toast.success(`Balance: ${decimalBalance} ${denom}`);
        } catch (error: any) {
          console.error("Error fetching balance from RPC:", error);
          toast.error("Error fetching balance from RPC: ", error.message);
        }
      }
    }
  }

  return (
    <div className="container h-[100vh] flex flex-col justify-center items-center gap-y-12">
      <h1 className="text-4xl font-bold text-white">Add NilChain to Keplr example</h1>
      <AddNillionNetworkButton
        addChainSuccess={async (message) => {toast.success(message)}}
        addChainFail={async (error) => {toast.error(error)}}
      >

      </AddNillionNetworkButton>
      <button className="flex flex-col justify-center items-center py-4 px-8 bg-[#0021f5] hover:bg-[#165bfa] active:bg-[#0021f5] text-white font-bold rounded-xl cursor-pointer"
            onClick={getBalance}
      >
        Get Balance
      </button>
      {
        balance > 0 && (
          <p className="text-white text-lg">Balance: {balance} {denom}</p>
        )
      }
    </div>
  );
}
