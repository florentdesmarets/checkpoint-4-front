import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import {DOMAIN_URL} from '../../Fetch'

export default function Home() {
    return(
   
        <div className="home-container" >
            <h4 className="jet-animation">🚀</h4>
           <video className="video" src={`${DOMAIN_URL}/assets/video-true.mp4`} autoPlay muted loop />
           <h2 className="hello">Hello my name is</h2>
           <h1 className="home-title">FLORENT DESMARETS</h1>
           <p className="react-developper">An React Developer 🚀</p>
           <h2 className="my-portfolio">And this is my Portfolio</h2>
           <div className="social-networks-container">
               <a href="https://www.facebook.com/florent.desmarets" target="BLANK"><img src={`${DOMAIN_URL}/assets/facebook(3).png`} alt="facebook" className="social-networks"/></a>
               <a href="https://github.com/florentdesmarets" target="BLANK"><img src={`${DOMAIN_URL}/assets/github.png`} alt="github" className="social-networks"/></a>
               <a href="https://www.instagram.com/florent_desmarets/?hl=fr" target="BLANK"><img src={`${DOMAIN_URL}/assets/instagram(3).png`} alt="instagram" className="social-networks"/></a>
               <a href="https://www.linkedin.com/in/florent-desmarets-638a491b9/" target="BLANK"><img src={`${DOMAIN_URL}/assets/linkedin.png`}  alt="linkedin" className="social-networks"/></a>
           </div>
        </div>
      
       
    );
}