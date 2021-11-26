import React from 'react';
import { Moralis } from "react-moralis";

const ConfirmButton = () => {

    const web3 = await Moralis.enableWeb3({ provider: "walletconnect" });
    const contract = new web3.eth.Contract(contractAbi, contractAddress);

    const ABI = [
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }
            ],
            name: "allowance",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
            payable: false,
            stateMutability: "view",
            type: "function"
        }
    ];
    const options = {
        contractAddress: "0xe...56",
        functionName: "allowance",
        abi: ABI,
        params: {
            owner: "0x2...45",
            spender: "0x3...49"
        },
    };
    const allowance = await Moralis.executeFunction(options);
    const receipt = await Moralis.executeFunction(options);
    console.log(receipt)

    return (
        <button className="btn" onClick={ payForPremium }>Confirm and Pay</button>
    );
};

export default ConfirmButton;