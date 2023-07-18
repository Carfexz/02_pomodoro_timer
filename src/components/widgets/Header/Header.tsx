import React from "react";
import './Header.css'

const Header = ({ text = 'Header' }) => {
    return (
        <div className="main-header">
            {text}
        </div>
    )
}

export default Header;