import React from 'react';
import logo from "./../assets/logo-white.svg";
import {FaFacebook, FaInstagram, FaLinkedin, FaTelegram} from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="upper-logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="wrapper-container">
                    <div className="list">
                        <ul className="page">
                            <li className="main">Pages</li>
                            <li className="link">Home</li>
                            <li className="link">Store</li>
                            <li className="link">About</li>
                            <li className="link">Contact</li>
                        </ul>
                        <ul className="page">
                            <li className="main">Store categories</li>
                            <li className="link">Presets</li>
                            <li className="link">Prints</li>
                        </ul>
                    </div>
                    <div className="list">
                        <ul className="page">
                            <li className="main">Preset packs</li>
                            <li className="link">Mirro Preset Pack Vol. 01</li>
                            <li className="link">Mirro Preset Pack Vol. 02</li>
                            <li className="link">Mirro Preset Pack Vol. 03</li>
                            <li className="link">Mirro Preset Pack Vol. 04</li>
                        </ul>
                        <ul className="page">
                            <li className="main">Business Areas</li>
                            <li className="link">Wedding Photography</li>
                            <li className="link">Sports Photography</li>
                            <li className="link">Portrait Photography</li>
                            <li className="link">Architecture Photography</li>
                            <li className="link">Animal Photography</li>
                            <li className="link">Food Photography</li>
                            <li className="link">Nature Photography</li>
                        </ul>
                    </div>
                    <div className="list">
                        <ul className="page">
                            <li className="main">Utility Pages</li>
                            <li className="link">Instructions</li>
                            <li className="link">Style guide</li>
                            <li className="link">Licenses</li>
                            <li className="link">Licenses</li>
                        </ul>
                    </div>
                    <div className="newsteller">
                        <div className="content">
                            <h1 className="main">Newsletter</h1>
                            <p className="link">Subscribe to my newsletter where I share news about upcoming printings
                                and preset sales.</p>
                            <div className="emails">
                                <input type="email" placeholder="Enter your email" className="input-email"/>
                                <button className="submit-button">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower">
                    <div className="symbol">
                        <span>&copy; Mirro Photography, LLC. All rights reserved. Powered by</span>
                        <span>Webflow.</span>
                    </div>
                    <ul className="social-wrapper">
                        <li><FaLinkedin/></li>
                        <li><FaFacebook/></li>
                        <li><FaInstagram/></li>
                        <li><FaTelegram/></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;