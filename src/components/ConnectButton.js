import React from 'react';
import { useMoralis } from "react-moralis";
import PropertyForm from './PropertyForm';
import { Route } from 'react-router-dom';

const ConnectButton = () => {

    const { authenticate, isAuthenticated } = useMoralis();


    if (!isAuthenticated) {
        return (
            <div>
                <button className="btn" type="button" onClick={() => authenticate()}>Connect</button>
            </div>
            );
        }
    return (
        <Route exact path="/propertyform" contents= { PropertyForm } />
    )
};

export default ConnectButton;