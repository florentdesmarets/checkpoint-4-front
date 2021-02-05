import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import {useState} from 'react';

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
                <Link className="links" to="/admin">  <h2 className="admin">🍆</h2></Link>
            </div>
        </div>
        <div className="navbar-responsive">
            <div className="title-navbar-container">
<Link className="links" to="/"> <h1 className="navbar-title">Florent Desmarets</h1></Link></div>
            <div className="NavbarMenu-Burger" id="#Burger" onClick={changeOpenMenu} >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={openMenu ? "menu-open" : "menu-close"}>
                <Link className="links" to="/">  <h2 className="home">Home</h2></Link>
                <Link className="links" to="/about-me">  <h2 className="about">About me</h2></Link>
                <Link className="links" to="/projects">  <h2 className="projects">Projects</h2></Link>
                <Link className="links" to="/contact">  <h2 className="contact">Contact</h2></Link>
                <Link className="links" to="/admin">  <h2 className="admin">🍆</h2></Link>
            </div>
        </div>
    </div>
    );
}