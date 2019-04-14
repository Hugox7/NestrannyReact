import React from 'react';


import './Footer.css';

const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <div id="footer">
            <p>© Copyright Nestranny Conseil - {date}</p>    
        </div>
    );
}

export default Footer;