import PropertyCard from "./PropertyCard";
import { useMoralis } from "react-moralis";

const PropertyForm = () => {

    const { logout, isAuthenticating } = useMoralis();
        return (
            <> 
                <div className="containerFlex">
                    <div className="topnavLeft">
                        <a href="#logout" onClick={() => logout()} disabled={isAuthenticating}>LOGOUT</a>
                    </div>
                    <div className="topnavRight">
                        <a href="#about">ABOUT</a>
                    </div>
                </div>
                <div className="cardContainer" >
                    <PropertyCard/>
                </div>
            </>
        );
    };
    
    
    export default PropertyForm;