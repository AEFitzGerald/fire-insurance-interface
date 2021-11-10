import './App.css';
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import Authenticate from './components/Authenticate';
import {
    BrowserRouter as Router,
    //Switch,
    //Route,
    //NavLink,
    //Redirect
} from "react-router-dom";


const App = () => {
    const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
        useMoralis();
    
    useEffect(() => {
        if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading ) enableWeb3();
        // eslint-diable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, isWeb3Enabled]);

    return (
        <Router>
            <Authenticate></Authenticate>
        </Router>

    );
};

    export default App;


