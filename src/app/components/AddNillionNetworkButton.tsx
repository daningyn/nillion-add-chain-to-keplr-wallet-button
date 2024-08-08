'use client';
import { config } from '../common/config';


declare global {
    interface Window {
        keplr:any;
    }
}

type AddToChainButtonProps = {
    addChainSuccess: (message: string) => void;
    addChainFail: (error: string) => void;
    style?: React.CSSProperties;
    className?: string;
    buttonTitle?: string;
};

const AddNillionNetworkButton: React.FC<AddToChainButtonProps> = (
    { addChainSuccess, addChainFail, style, className, buttonTitle }
) => {
    
    const handleAddChain = async () => {
        if (!window.keplr) {
            addChainFail("Please install Keplr extension");
            return;
        }

        try {
            await window.keplr.experimentalSuggestChain(config);
            addChainSuccess("Chain added successfully! Please enable Nillion in Chain Visibility tab");
        } catch (error: any) {
            console.error(error);
            addChainFail("Failed to add chain: " + error.message);
        }
    };

    return (
        <button className={`flex flex-col justify-center items-center py-4 px-8 bg-[#0021f5] hover:bg-[#165bfa] active:bg-[#0021f5] text-white font-bold rounded-xl cursor-pointer ${className}`} style={style} onClick={handleAddChain}>
            {buttonTitle ? buttonTitle : 'Add NilChain to Keplr'}
        </button>
    );
};

export default AddNillionNetworkButton;
