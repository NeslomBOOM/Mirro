import React from 'react';
import image from "./../assets/zigZag.png";

import service1 from "../assets/service1.svg";
import service2 from "../assets/service2.svg";
import service3 from "../assets/service3.svg";
import service4 from "../assets/service4.svg";
import service5 from "../assets/service5.svg";
import service6 from "../assets/service6.svg";
import service7 from "../assets/service7.svg";
import Card from "./Card.jsx";

const data = [
    {
        image: service1,
        title: "Wedding Photography",
        description: "Wedding photography is often called the bread and butter of photographers — but that doesn't mean it has to be boring. Quite the opposite!",
    },
    {
        image: service2,
        title: "Sports Photography",
        description: "Sports photography is awesome. Sitting on the sidelines with a massive telephoto allows me to get right into the action — I love shooting sports where there's a lot of explosive movement.",
    },
    {
        image: service3,
        title: "Portrait Photography",
        description: "Who doesn't love portrait photography? I love being able to capture that expression, quirk, smile or whatever, that sort of defines a person.",
    },
    {
        image: service4,
        title: "Architecture Photography",
        description: "The nice thing about shooting architecture (in my opinion) is that it's so easy to do. Seriously, just pick up your camera and get out there.",
    },{
        image: service5,
        title: "Animal Photography",
        description: "Whenever I'm travelling I always make sure to pack gear that allows me to capture the local wildlife. The eagle that takes flight in this picture is probably my most prized image.",
    },{
        image: service6,
        title: "Food Photography",
        description: "I do food photography for blogs, restaurants, influencers, YouTube channels — but most importantly (if I manage to cook something that looks good) — I do food photography for myself.",
    },{
        image: service7,
        title: "Nature Photography",
        description: "Landscape photography just never gets old. Someone told me that those are the kinds of pictures you never look. Well, I don't agree.",
    },
];
const Services = () => {
    return (
        <div className="services">
            <div className="upper-container">
                <img src={image} alt="zigzag"/>
                <h1 className="title">Services</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                    enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                    nulla.</p>
            </div>
            <div className="cards">
                {
                    data.map(({image, title, description}, index) =>
                        <Card
                            image={image}
                            title={title}
                            description={description}
                            key={index}
                        />
                    )
                }
            </div>
            <div className="background">
                <div className="ellipse gray"></div>
            </div>
        </div>
    );
};

export default Services;