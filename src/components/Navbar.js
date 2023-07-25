import React from "react";
import logo from './assets/logo.jpg';
import cart from './assets/cart.png';
import login from './assets/login-logo.png';
import './styles/Navbar.module.css';

export default function Navbar(){
    return(
        <header className="Navbar">
            <img src={logo} alt="logo" className="Navbar__logo"/>
            <div className="Navbar__sections">
                <p>Men's</p>
                <p>Women's</p>
                <p>Electronics</p>
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