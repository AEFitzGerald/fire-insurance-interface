import NavAfterConnect from './NavAfterConnect';
import React, { useState, useEffect } from 'react';
import treelineLg from './imgs/treelineLg.png';
import treelineSm from  './imgs/treelineSm.png'
import Footer from './Footer';


const About = () => {

    const imageUrl = useWindowWidth() >= 650 ? treelineLg : treelineSm;

        return (
            <>  
                <div id="treelineImg" className="treelineImg" style={{ backgroundImage:`url(${ imageUrl })` }}>
                    <NavAfterConnect/>
                    <div className="cardContainer colStep" >
                        <h3>About</h3>
                    
                        <p>Lorem Ipsum Cupcake sprinkles dog whispers tear drops put out forest fires. Write something about the greater vision of the project. Drop regards to Moralis, Chainlink, Ethereum (logos) team member names with a link to them if they want.</p>
                    
                    </div>
                    <Footer/>
                </div>
            </>
        );
    };
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

export default About;