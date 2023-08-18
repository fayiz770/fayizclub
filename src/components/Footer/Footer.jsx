import React from 'react';
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

export default function Footer() {
    return(
        <div className="footer--container">
            <div className="blure"></div>
            <hr />
            <div className="footer">
                <img src={Github} alt="Github" />
                <img src={Instagram} alt="Instagram" />
                <img src={LinkedIn} alt="LinkedIn" />
            </div>
            <div className="logo--f">
                <img src={Logo} alt="Logo" />
            </div>
        </div>
    )
};
