import Navbar from "./components/Navbar.jsx";
import ScrollOnTop from "./components/ScrollOnTop.jsx";
import scrollreveal from "scrollreveal";
import {useEffect} from "react";
import Footer from "./components/Footer.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Services from "./components/Services.jsx";
import PresentStore from "./components/PresentStore.jsx";
import Contact from "./components/Contact.jsx";

function App() {
    useEffect(()=>{
        const registerAnimations = () => {
            const sr = scrollreveal({
                origin:"bottom",
                distance:"80px",
                duration:2000,
                reset:false,
            });
            sr.reveal(`
            nav,.about-me,.contact,.present-store,.services,footer
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
    <div className="app-container">
      <ScrollOnTop/>
      <Navbar/>
      <AboutMe/>
      <Services/>
      <PresentStore/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
