import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Card = ({image,title,description}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt="super"/>
            </div>
            <div className="card-content">
                <div className="card-title">{title}</div>
                <div className="card-description">{description}</div>
            </div>
            <div className="card-btn__arrow">Read more <FaArrowRight/></div>
        </div>
    );
};

export default Card;