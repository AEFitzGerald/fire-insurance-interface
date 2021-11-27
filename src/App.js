import './App.css';
import React from "react";
import About from './components/About';
import Connect from './components/Connect';
import { useMoralis } from "react-moralis";
import PropertyForm from './components/PropertyForm';
import {Route, Routes } from "react-router-dom";
import PremiumSet from './components/PremiumSet';
import Confirm from './components/Confirm';


function App(){

const { isAuthenticated } = useMoralis();

if (!isAuthenticated ) {
    return (
        <div>
            <Routes>
                <Route exact path='/' element= { <Connect/> }/>
                <Route path ="/about" element= { <About/> }/>
            </Routes>
        </div> 
    )
}
return (
    <div>
        <PropertyForm/>
        <Routes>
            <Route path ="/premium" element={ <PremiumSet/> }/>
            <Route path ="/confirm" element={ <Confirm/> }/>
        </Routes>
    </div>
    )
}

export default App;


