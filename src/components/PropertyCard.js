import React from 'react';
import PropertyButton from './PropertyButton';



const PropertyCard = () => {
    return (
        <div className="card">
            <form >
                <label>Longitude and Latitude</label>
                <textarea/>
                <PropertyButton/>
            </form>         
        </div>
    );
};


export default PropertyCard;