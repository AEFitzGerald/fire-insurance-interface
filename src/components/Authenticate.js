//import { useMoralisDapp } from "../providers/MoralisDappProvider/MoralisDappProvider";
import { useMoralis } from "react-moralis";


function Authenticate() {
    const { authenticate, isAuthenticated, user, logout } = useMoralis();
    //const { walletAddress } = useMoralisDapp();

    if ( !isAuthenticated ) {
        return (
            <div>
                <button id="btn-login" 
                onClick={() => authenticate({ signingMessage: "Get Aquila Insurance"})}>
                Connect
                </button>
            </div>
        );
    }

    return (
        <>
        <div>
            <h4>Welcome {user.get("username")}</h4>
        </div>
        <div>
            <button id="btn-logout"
            onClick={() =>logout()}>
            Logout
            </button>
        </div>
        </>
    );
}

export default Authenticate;


