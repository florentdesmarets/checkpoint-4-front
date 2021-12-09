import React from 'react';
import './Home.css';
import {DOMAIN_URL} from '../../Fetch'
import {Link} from "react-router-dom";


export default function Home() {
    return(
   
        <div className="home-container" >
            <img className="background" src={`${DOMAIN_URL}/assets/gemetric2.jpg`} alt='background'/>
            <div className="avatar"></div>
            <div className="text-container">
                <h2 className="hello">Wireframe</h2>
                <h2 className="hello">FullStack</h2>
                <h2 className="hello">Minimalist</h2>
                <div className="hello">
                <div class="code">
                    <span className="title-span">C</span>
                    <span className="letter"></span>
                    <span className="title-span-resp">o</span>
                    <span className="title-span">d</span>
                    <span className="title-span">e</span>
                </div>          
                </div>
            </div>
            <div className="buttons">
                <Link className="links" to="/about-me"><div className="button1">MY PORTFOLIO</div></Link>
                <Link className="links" to="/contact"><div className="button2">GET IN TOUCH</div></Link> 
            </div>
        </div>
      
       
    );
}