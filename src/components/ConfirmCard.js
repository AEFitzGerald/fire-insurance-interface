import React from 'react';
import ConfirmButton from './ConfirmButton';


const ConfirmCard = () => {
    return (
        <div className="card">
            <p className="cardText">Your premium is X-ETH and insures your home and property: April 1st to September 30th, 2022.</p>
            <ConfirmButton/>
        </div>
    );
};


export default ConfirmCard;