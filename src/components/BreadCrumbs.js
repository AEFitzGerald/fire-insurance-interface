import React from 'react';


const BreadCrumbs = () => {
    return (
        <div className="row">
            <div className="crumbCol">
                <h5 className="crumbTitle">
                    <span className="crumbNumbers">1. </span>Connect Wallet
                </h5>
                <p>Connect metamask wallet.</p>
            </div>
            
            <div className="crumbCol">
                <h5 className="crumbTitle">
                    <span className="crumbNumbers">2. </span>Property Details
                </h5>
                <p>Submit coordinates of property.</p>
            </div>

            <div className="crumbCol">
                <h5 className="crumbTitle">
                    <span className="crumbNumbers">3. </span>Premium Set
                </h5>
                <p>Smart contract is generated.</p>
            </div>

            <div className="crumbCol">
                <h5 className="crumbTitle">
                    <span className="crumbNumbers">4. </span>Confirm Contract
                </h5>
                <p>Claims paid automatically.</p>
            </div>
        </div>
        
    );
};



export default BreadCrumbs;