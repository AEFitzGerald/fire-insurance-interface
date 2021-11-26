import React from 'react';
import { useMoralis } from "react-moralis";

const NavAfterConnect = () => {

    const { logout, isAuthenticating } = useMoralis();

    return (
        <div className="containerFlex">
            <div className="topnavLeft">
                <a href="#logout" onClick={() => logout()} disabled={isAuthenticating}>LOGOUT</a>
            </div>
        </div>
    );
}

export default NavAfterConnect;