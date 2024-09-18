import React, {useState} from 'react';
import logo from "./../assets/logo.svg";
import {FaShoppingCart} from "react-icons/fa";

const Navbar = () => {
    const [navState, setNavState] = useState(false);
    return (
        <nav>
            <div className="brand">
                <img src={logo} alt=""/>
            </div>
            <div className="links-container">
                <ul className="links">
                    <li><a href="#Presents">Presents</a></li>
                    <li><a href="#Prints">Prints</a></li>
                    <li><a href="#Store">Store</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
                <button className="cart-btn">
                    <FaShoppingCart/>
                    <span className="cart-text">Cart</span>
                    <span className="cart-count">0</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;