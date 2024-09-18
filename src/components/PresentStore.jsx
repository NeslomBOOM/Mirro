import React from 'react';
import image from "../assets/zigZag.png";
import presetstore1 from "../assets/presetstore1.png";
import presetstore2 from "../assets/presetstore2.png";
import presetstore3 from "../assets/presetstore3.png";
import {FaArrowRight} from "react-icons/fa";

const data = [
    {
        image: presetstore1,
        title: "Mirro Preset Pack Vol. 01",
        description: "The first volume is my go-to presets when shooting action sports. Just the right amount of contrast and highlights to make your photo (literally) pop!",
    },
    {
        image: presetstore2,
        title: "Mirro Preset Pack Vol. 02",
        description: "Vol. 02 is dedicated solely to landscape photography. Pay attention to your exposure while out there and these presets will make your photos look great.",
    },
    {
        image: presetstore3,
        title: "Mirro Preset Pack Vol. 03   ",
        description: "These are a collection of my most used wedding presets — use with caution as you'll end up loving wedding photography.",
    },
];
const PresentStore = () => {
    return (
        <div className="present-store">
            <div className="upper-container">
                <img src={image} alt="zigzag"/>
                <h1 className="title">Preset Store</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                    enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                    nulla.</p>
            </div>
            <div className="cards">
                {
                    data.map((item, index) => (
                        <div key={index} className="card-presentstore">
                            <img src={item.image} alt={item.title}/>
                            <div className="card-text">
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="presetstore-btn">Preset store <FaArrowRight/></div>
            <div className="background">
                <div className="ellipse red"></div>
            </div>
        </div>
    );
};

export default PresentStore;