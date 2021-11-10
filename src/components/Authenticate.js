import { useMoralisDapp } from "../providers/MoralisDappProvider/MoralisDappProvider";
import { useMoralis } from "react-moralis";


function Authenticate() {
    const { authenticate, isAuthenticated, logout } = useMoralis();
    const { walletAddress } = useMoralisDapp();

    if ( !isAuthenticated ) {
        return (
            <div onClick={() => authenticate({ signingMessage: "Get Insurance"})}>
                <p>Authenticate</p>
            </div>
        );
    }

    return (
        <div onClick={() =>logout()}>
            <p>{ walletAddress }</p>
        </div>
    );
}

export default Authenticate;


