import '../../Static/css/toggle_menu.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                    <a style={{ animationDelay: "0.2s" }}> <Link to="/" > Home</Link></a>
                    <a style={{ animationDelay: "0.3s" }}> <Link to="/about" > About</Link></a>
                    <a style={{ animationDelay: "0.4s" }}> <Link to="/conference theme" > Conference Themes </Link></a>
                    <a style={{ animationDelay: "0.5s" }}> <Link to="/committee" > Committee </Link></a>
                    <a style={{ animationDelay: "0.6s" }}> <Link to="/international advisory" > International Advisory Committee </Link></a>
                    <a style={{ animationDelay: "0.7s" }}> <Link to="/partners" > Partners </Link></a>
                    <a style={{ animationDelay: "0.8s" }}> <Link to='/abstract-submission' > Abstract Submission </Link></a>
                    <a style={{ animationDelay: "0.9s" }}> <Link to="/contact us" > Contact Us </Link></a>
                </nav>
            </div>
        </body>
    )
}
