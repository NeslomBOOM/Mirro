import React, {useState} from 'react';
import logo from "./../assets/logo.svg";
import {FaShoppingCart} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [navState, setNavState] = useState(false);
    return (
        <nav>
            <div className="brand">
                <Link to="/"><img src={logo} alt=""/></Link>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    {navState ? (
                        <MdClose onClick={() => setNavState(false)}/>
                    ) : (
                        <GiHamburgerMenu onClick={() => setNavState(true)}/>
                    )}
                </div>
            </div>
            <div className={`links-container ${navState ? "nav-visible" : ""}`}>
                <ul className="links">
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/presentstore">Store</Link></li>
                    <li><Link to="/aboutme">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
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