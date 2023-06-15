import '../../static/css/toggle_menu.css'
import React, { useState } from 'react';

// import myImage from '../static/img/bg.jpeg';


export default function Toggle() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (

    <body className={`${isMenuOpen ? 'open' : ""}`}>
      <button className="burger" onClick={toggleMenu}>
      </button>
      <div className="background"></div>
      <div id='menu_id'>
        <nav>
          <a style={{ animationDelay: "0.2s" }}>Home</a>
          <a style={{ animationDelay: "0.3s" }}>About</a>
          <a style={{ animationDelay: "0.4s" }}>Conference Themes</a>
          <a style={{ animationDelay: "0.5s" }}>Committee</a>
          <a style={{ animationDelay: "0.6s" }}>International Advisory Committee</a>
          <a style={{ animationDelay: "0.7s" }}>Partners</a>
          <a style={{ animationDelay: "0.8s" }}>Abstract Submission</a>
          <a style={{ animationDelay: "0.9s" }}>Contact Us</a>
        </nav>
      </div>
    </body>
  )
}
