import AddNillionNetworkButton from "@/app/components/AddNillionNetworkButton";

export default function Home() {
  return (
    <div className="container h-[100vh] flex flex-col justify-center items-center">
      <AddNillionNetworkButton
        addChainSuccess={async (message) => {'use server'; alert(message)}}
        addChainFail={async (error) => {'use server'; alert(error)}}
      >

      </AddNillionNetworkButton>
    </div>
  );
}
