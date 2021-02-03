import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

export default function Navbar() {
    return(
   
        <div className="navbar-container" >
            <div className="navbar-title-container">
                <Link className="links" to="/"> <h1 className="navbar-title">Florent Desmarets</h1></Link>
            </div>
            <div className="navbar-links-container">
                <Link className="links" to="/">  <h2 className="home">Home</h2></Link>
                <Link className="links" to="/about-me">  <h2 className="about">About me</h2></Link>
                <Link className="links" to="/projects">  <h2 className="projects">Projects</h2></Link>
                <Link className="links" to="/contact">  <h2 className="contact">Contact</h2></Link>
                <Link className="links" to="/admin">  <h2 className="admin">🍆</h2></Link>
            </div>
        </div>
      
       
    );
}