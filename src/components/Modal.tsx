// import { useState } from "react"
import React from 'react';
import metamask from '../assets/metamask.svg';
import walletconnect from '../assets/walletconnect.svg';
import coinbase from '../assets/coinbase.svg';  
import keplr from '../assets/keplr.svg';
import { ArrowRightIcon } from "lucide-react";
export  const Modal: React.FC = () =>{
    // const [connect, setConnect] = useState(false)
    // // const handleConnect = () => {
    // //     setConnect(!connect)
    // // }
    const wallets = [
        {name: "MetaMask", icon: metamask},
        {name: "WalletConnect", icon: walletconnect},
        {name: "Coinbase Wallet", icon: coinbase},
        {name: "Keplr", icon: keplr},
    ]
    return (
        <div className="bg-black w-[500px] h-fit rounded-lg text-white px-6 py-10">
            <div className="flex justify-between mb-7">
                <h1>Connect a wallet</h1>
                <p className="font-bold cursor-pointer">X</p>
            </div>
            <div className="flex flex-col gap-5 ">
                {wallets.map((wallet) => (
                    <div key={wallet.name} className="flex justify-between items-center bg-gray-800 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-700">
                        <div className="flex gap-3 items-center">
                            <img src={wallet.icon} alt={wallet.name} />
                            <p>{wallet.name}</p>
                        </div>
                        <ArrowRightIcon size={20} />
                    </div>
                ))}
            </div>
            {/* <button onClick={handleConnect} className="py-2 px-4 cursor-pointer bg-blue-500 text-white rounded-full">
                {connect ? "Disconnect" : "Connect"}
            </button> */}
        </div>
        
    )
}