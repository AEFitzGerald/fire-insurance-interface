import './App.css';
import React from "react";
import Connect from './components/Connect';
import { useMoralis } from "react-moralis";
import PropertyForm from './components/PropertyForm';


function App(){

const { isAuthenticated } = useMoralis();

if (!isAuthenticated ) {
    return (
        <>
        <div>
            <Connect/>
        </div>
        </>
    )
}
return (
    <div>
        <PropertyForm/>
    </div>
);
}

export default App;


