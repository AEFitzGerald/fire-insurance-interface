import './App.css';
import React from "react";
import About from './components/About';
import Connect from './components/Connect';
import { useMoralis } from "react-moralis";
import PropertyForm from './components/PropertyForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App(){

const { isAuthenticated } = useMoralis();

if (!isAuthenticated ) {
    return (
        <BrowserRouter>
        <div>
            <Routes>
                <Route exact path='/' element= { <Connect/> }/>
                <Route path ="/about" element= { <About/> }/>
            </Routes>
        </div>
        </BrowserRouter>  
    )
}
return (
    <div>
        <PropertyForm/>
    </div>
    )
}

export default App;


