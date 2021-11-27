import React from 'react';
import { Link } from 'react-router-dom';


const PremiumButton = () => {

    return (
        <Link to="/confirm" className='btn'>Check Status</Link>
    );
};


export default PremiumButton;