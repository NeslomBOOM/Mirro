import React from 'react';
import image from "./../assets/AboutMePhoto.png";

const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="content-container">
                <div className="text-container">
                    <h1 className="text-title">Hi, I'm James Mirro & I'm a photographer.</h1>
                    <p className="text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                        interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id
                        rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    <button className="text-btn">Read more</button>
                </div>
                <div className="image">
                    <img src={image} alt="About me"/>
                </div>
            </div>
            <div className="background">
                <div className="ellipse orange"></div>
                <div className="ellipse green"></div>
            </div>
        </div>
    )
        ;
};

export default AboutMe;