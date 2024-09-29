import scrollreveal from "scrollreveal";
import {useEffect} from "react";
import { Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar.jsx";
import ScrollOnTop from "./components/ScrollOnTop.jsx";
import Footer from "./components/Footer.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Services from "./components/Services.jsx";
import PresentStore from "./components/PresentStore.jsx";
import Contact from "./components/Contact.jsx";
import Layout from "./Layout.jsx";

function App() {
  return (
    <div className="app-container">
      <Navbar/>
        <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route path="/aboutme" element={<AboutMe />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/presentstore" element={<PresentStore />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
