import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import {useState} from 'react';
// import { DOMAIN_URL } from '../../Fetch';


export default function Navbar() {

    const [openMenu, setOpenMenu]= useState(false)
    const changeOpenMenu=() =>setOpenMenu(!openMenu)

    return(
        <div className="navbar">
        <div className="navbar-container" >
            <div className="navbar-title-container">
                <Link className="links" to="/"> <h1 className="navbar-title">Florent Desmarets</h1></Link>
            </div>
            <div className="navbar-links-container">
                <Link className="links" to="/">  <h2 className="home">Home</h2></Link>
                <Link className="links" to="/about-me">  <h2 className="about">About me</h2></Link>
                <Link className="links" to="/projects">  <h2 className="projects">Projects</h2></Link>
                <Link className="links" to="/contact">  <h2 className="contact">Contact</h2></Link>
                <Link className="links" to="/admin">  <h2 className="admin">🚀</h2></Link>
            </div>
        </div>
        <div className="navbar-responsive">
            <div className="title-navbar-container">
                <Link className="links" to="/"> <h1 className="navbar-title">Florent Desmarets</h1></Link>
            </div>

            <div className="NavbarMenu-Burger" id="#Burger" onClick={changeOpenMenu} >
                <span className={openMenu ? "cross-1" : "cross-4" }></span>
                <span className={openMenu ? "cross-2" : "cross-5" }></span>
                <span className={openMenu ? "cross-3" : "cross-6" }></span>
            </div>
            <div className={openMenu ? "menu-open" : "menu-close"}>
                <img className="background" src="https://github.com/florentdesmarets/checkpoint-4-front/blob/main/public/assets/gemetric2.jpg?raw=true" alt='background' />
                <div className={openMenu ? "animation-on" : "animation-off"}>
                    <Link className="links" to="/" onClick={changeOpenMenu}>  <h2 className="home">Home</h2></Link>
                    <Link className="links" to="/about-me" onClick={changeOpenMenu}>  <h2 className="about">About me</h2></Link>
                    <Link className="links" to="/projects" onClick={changeOpenMenu}>   <h2 className="projects">Projects</h2></Link>
                    <Link className="links" to="/contact" onClick={changeOpenMenu}>   <h2 className="contact">Contact</h2></Link>
                    <div className="social-networks-container">
                        <a href="https://www.facebook.com/florent.desmarets" target="BLANK" rel='noreferrer' ><img src="https://github.com/florentdesmarets/checkpoint-4-front/blob/main/public/assets/facebook(3).png?raw=true" alt="facebook" className="social-networks"/></a>
                        <a href="https://github.com/florentdesmarets" target="BLANK" rel='noreferrer'><img src="https://github.com/florentdesmarets/checkpoint-4-front/blob/main/public/assets/github.png?raw=true" alt="github" className="social-networks"/></a>
                        <a href="https://www.instagram.com/florent_desmarets/?hl=fr" target="BLANK" rel='noreferrer'><img src="https://github.com/florentdesmarets/checkpoint-4-front/blob/main/public/assets/instagram(3).png?raw=true" alt="instagram" className="social-networks"/></a>
                        <a href="https://www.linkedin.com/in/florent-desmarets-638a491b9/" target="BLANK" rel='noreferrer'><img src="https://github.com/florentdesmarets/checkpoint-4-front/blob/main/public/assets/linkedin.png?raw=true"  alt="linkedin" className="social-networks"/></a>
                    </div>
                </div>
                <Link className="links" to="/admin" onClick={changeOpenMenu}>  <img className="admin" src="https://github.com/florentdesmarets/checkpoint-4-front/blob/main/public/assets/cerf.jpg?raw=true" alt='dear'/></Link> 
            </div>
        </div>
    </div>
    );
}