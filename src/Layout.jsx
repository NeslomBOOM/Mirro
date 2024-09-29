import React, {useEffect} from 'react';
import scrollreveal from "scrollreveal";


import ScrollOnTop from "./components/ScrollOnTop.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Services from "./components/Services.jsx";
import PresentStore from "./components/PresentStore.jsx";
import Contact from "./components/Contact.jsx";

const Layout = () => {
    useEffect(()=>{
        const registerAnimations = () => {
            const sr = scrollreveal({
                origin:"bottom",
                distance:"80px",
                duration:2000,
                reset:false,
            });
            sr.reveal(`
            nav,.about-me,.contact,.present-store,.services
            `,{interval:500}
            );
        };
        registerAnimations();
    },[]);

    window.setTimeout(()=>{
        const home = document.getElementsByClassName("about-me");
        home[0].style.transform = "none";
        const nav = document.getElementsByTagName("nav");
        nav[0].style.transform = "none";
    },1500)
    return (
        <div>
            <ScrollOnTop/>
            <AboutMe/>
            <Services/>
            <PresentStore/>
            <Contact/>
        </div>
    );
};

export default Layout;