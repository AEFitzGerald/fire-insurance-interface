import React, { useEffect, useState } from 'react';
import ConnectCard from './ConnectCard';
import BreadCrumbs from './BreadCrumbs';
import desktopHero from './imgs/desktopHero.png';
import mobileHero from  './imgs/mobileHero.png'
import Copyright from './Copyright';

const Connect = () => {

    
    const imageUrl = useWindowWidth() >= 650 ? desktopHero : mobileHero;

    return (
        <div id="hero-img" className="heroImg" style={{ backgroundImage:`url(${ imageUrl })` }}>
            <div className="container">
                <div className="topnavRight">
                    <a href="/About">ABOUT</a>
                </div>
            </div>
                <div className="cardContainer">
                    <ConnectCard/>
                </div>
                <BreadCrumbs/>
                <Copyright/>
        </div>
    );
}

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);


    useEffect(() => {   
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleWindowResize); 
        
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }

    }, []);

    return windowWidth;
};



export default Connect;