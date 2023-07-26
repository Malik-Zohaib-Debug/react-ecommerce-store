import React from "react";
import logo from './assets/logo.jpg';
import cart from './assets/cart.png';
import login from './assets/login-logo.png';
import { Link } from "react-router-dom";
import './styles/Navbar.css';

export default function Navbar(){
    return(
        <header className="Navbar">
            <Link to="/"><img src={logo} alt="logo" className="Navbar__logo"/></Link>
            <div className="Navbar__sections">
                <Link to="/mens"><span className="Navbar__section">Men's</span></Link>
                <Link to="/womens"><span className="Navbar__section">Women's</span></Link>
                <Link to="/electronics"><span className="Navbar__section">Electronics</span></Link>
            </div>
            <div className="Navbar__advanced-sections">
                <div className="Navbar__search">
                    <input type="text" placeholder="search"/>
                    <button>Q</button>
                </div>
                <img src={cart} alt="cart-logo" className="cart-logo"/>
                <img src={login} alt="login-logo" className="login-logo"/>
            </div>
        </header>
    );
}