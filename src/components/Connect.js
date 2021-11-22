import React from 'react';
import ConnectCard from './ConnectCard';
import BreadCrumbs from './BreadCrumbs';

const Connect = () => {

const styles = {
    hero: {
        backgroundImage: "url(/heroDesktop.png)",
        backgroundSize: 'cover',
        position: 'relative',
        backgroundPosition: 'top',
        height: "100vh"
    }
}

    return (
        <div id="hero-img" style={ styles.hero }>
            <div className="container">
                <div className="topnavRight">
                    <a href="#about">ABOUT</a>
                </div>
            </div>
                <div className="cardContainer" >
                    <ConnectCard/>
                </div>
                <BreadCrumbs/>
            
        </div>
    );
};


export default Connect;