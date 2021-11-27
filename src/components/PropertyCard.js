import React from 'react';
import { useMoralis } from 'react-moralis';




const PropertyCard = () => {

    const { setUserData, userError, isUserUpdating, user, property } = useMoralis();
    // const AquilaUser = Moralis.Object.extend("User");
    

    return (
        <div className="card">
            <form>
                { userError && <p> {userError.message }</p>}
                <label>Longitude and Latitude</label>
                <textarea name="property" id="property"/>
                <input type="submit" className="btn" onClick={() => setUserData({ user: user, property: property })} disabled={ isUserUpdating } />
            </form> 
        </div>
    );
};


export default PropertyCard;