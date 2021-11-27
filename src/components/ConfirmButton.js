// import React from 'react';
// import { Moralis } from "react-moralis";

// const ConfirmButton = () => {

    
//     const contract = new web3.eth.Contract(contractAbi, contractAddress);

//     const ABI = [
//         {
//             constant: true,
//             inputs: [
//                 {
//                     internalType: "address",
//                     name: "owner",
//                     type: "address"
//                 },
//                 {
//                     internalType: "address",
//                     name: "spender",
//                     type: "address"
//                 }
//             ],
//             name: "allowance",
//             outputs: [
//                 {
//                     internalType: "uint256",
//                     name: "",
//                     type: "uint256"
//                 }
//             ],
//             payable: false,
//             stateMutability: "view",
//             type: "function"
//         }
//     ];
//     const options = {
//         contractAddress: "0xe...56",
//         functionName: "allowance",
//         abi: ABI,
//         params: {
//             owner: "0x2...45",
//             spender: "0x3...49"
//         },
//     };

//     console.log(receipt)

//     const { data } = useMoralisQuery("propertyCoordinates");
//     const EnableWeb3 = ({ user }) => {
//         const { web3, enableWeb3, isWeb3Enabled, isWeb3EnableLoading, web3EnableError } = useMoralis()

//         if(isWeb3Enabled){
//             return null
//         }
//         return <div>
//             {web3EnableError && <ErrorMessage error={web3EnableError} />}
//             <button onClick={() => enableWeb3()} disabled={isWeb3EnableLoading}>Enable web3</button>
//         </div>
//         }
        
//     return (
//         <button className="btn" onClick={ payForPremium }>Confirm and Pay</button>
//     );
// };

// export default ConfirmButton;