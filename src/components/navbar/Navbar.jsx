import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import {useState} from 'react';
import { DOMAIN_URL } from '../../Fetch';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
                <img className="background" src={`${DOMAIN_URL}/assets/gemetric2.jpg`} />
                <div className={openMenu ? "animation-on" : "animation-off"}>
                    <Link className="links" to="/" onClick={changeOpenMenu}>  <h2 className="home">Home</h2></Link>
                    <Link className="links" to="/about-me" onClick={changeOpenMenu}>  <h2 className="about">About me</h2></Link>
                    <Link className="links" to="/projects" onClick={changeOpenMenu}>   <h2 className="projects">Projects</h2></Link>
                    <Link className="links" to="/contact" onClick={changeOpenMenu}>   <h2 className="contact">Contact</h2></Link>
                    <div className="social-networks-container">
                        <a href="https://www.facebook.com/florent.desmarets" target="BLANK"><img src={`${DOMAIN_URL}/assets/facebook(3).png`} alt="facebook" className="social-networks"/></a>
                        <a href="https://github.com/florentdesmarets" target="BLANK"><img src={`${DOMAIN_URL}/assets/github.png`} alt="github" className="social-networks"/></a>
                        <a href="https://www.instagram.com/florent_desmarets/?hl=fr" target="BLANK"><img src={`${DOMAIN_URL}/assets/instagram(3).png`} alt="instagram" className="social-networks"/></a>
                        <a href="https://www.linkedin.com/in/florent-desmarets-638a491b9/" target="BLANK"><img src={`${DOMAIN_URL}/assets/linkedin.png`}  alt="linkedin" className="social-networks"/></a>
                    </div>
                </div>
                <Link className="links" to="/admin" onClick={changeOpenMenu}>  <img className="admin" src={`${DOMAIN_URL}/assets/cerf.jpg`}/></Link> 
            </div>
        </div>
    </div>
    );
}