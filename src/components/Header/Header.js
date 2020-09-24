import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import HomeBanner from '../HomeBanner/HomeBanner';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-white pt-4 pb-2 fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Hot Onion Logo" />
                    </Link>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item ml-4 active">
                                <Link class="nav-link" href="#"><FontAwesomeIcon icon={faShoppingCart} />
                                </Link>
                            </li>
                            <li class="nav-item ml-4">
                                <Link class="nav-link" style={{ color: 'black', fontWeight: 'bold' }} href="#">Login</Link>
                            </li>
                            <li class="nav-item ml-4">
                                <Link class="nav-link btn btn-danger border rounded-pill px-md-4 px-3" href="#">Sign up</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

            <div>
                <HomeBanner />
            </div>
        </div>
    );
};

export default Header;