import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMoralis } from 'react-moralis';
import { Moralis } from 'moralis';



const PropertyCard = () => {

    let navigate = useNavigate();
    const AquilaUser = Moralis.Object.extend("User");
    const user = new AquilaUser();
    const { setUserData, userError } = useMoralis();

    const changeHandler = e => {
        setUserData({ 
            [e.target.name]:e.target.value
        })
    }
    async function submitHandler(e) {
        e.preventDefault();
        let result = await user.save(e.target)
        if (result.userError) {
            console.log(userError)
        } else {
            navigate('/premium');
        }
    }
        

    return (
        <div className="card">
            <form onSubmit = { submitHandler } autocomplete="off">
                { userError && <p> {userError.message }</p>}
                
                <label>Longitude and Latitude</label>

                <textarea name="property" id="property" onChange={ changeHandler} />

                <input type="submit" className="btn" />

            </form> 
        </div>
    );
};


export default PropertyCard;