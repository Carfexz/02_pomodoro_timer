import React from "react";
import './Footer.css'

const Footer = ({ text = 'Footer' }) => {
    return (
        <div className="main-footer">
            {text}
        </div>
    )
}

export default Footer;