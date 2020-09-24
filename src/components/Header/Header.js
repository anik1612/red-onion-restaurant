import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
import './Header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white py-2 fixed-top">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="Hot Onion Logo"/>
                </Link>

                
            </div>
        </nav>
        
    );
};

export default Header;