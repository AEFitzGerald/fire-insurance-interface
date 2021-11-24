import React from 'react';
import logoSmall from './imgs/logoSmall.png'

const Footer = () => {
    return (
        <>
        <div className="footerRow container">
            <img src={ logoSmall } style={{ width:"150px"}} alt ="logo"/>
            <p className="companyTag">Parametric Forest Fire Insurance</p>      
        </div>
        <div id="copyright">
            <p className="copyright">&copy; 2021 <span className="copyrightCompany">Aquila</span></p>
        </div>
        </>

    );
};

export default Footer;