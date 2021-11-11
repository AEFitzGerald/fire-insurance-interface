import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from 'react-moralis';
import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";


/* Moralis init code */
const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;



const Application = () => {
    const isServerInfo = APP_ID && SERVER_URL ? true : false;
    if ( isServerInfo )
        return (
            <MoralisProvider appId = { APP_ID } serverUrl = { SERVER_URL }>
                <MoralisDappProvider>
                    <App isServerInfo />
                </MoralisDappProvider>
            </MoralisProvider>
        );
    else {
        return (
            <div>
                <h1>Hi</h1>
            </div>
        );
    }
};

ReactDOM.render(
    // <React.StrictMode>
    <Application />,
    // <React.StrictMode>,
    document.getElementById('root')
);
