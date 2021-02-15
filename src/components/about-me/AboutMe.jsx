import React from 'react';
import './AboutMe.css';
import {Link} from "react-router-dom";
import {DOMAIN_URL} from '../../Fetch'
import {useState} from 'react';



export default function AboutMe() {


const [title, setTitle]=useState(true);
const changeTitle = () =>{
    if(window.scrollY>= 50) {
        setTitle(false)
    }else{
        setTitle(true)
    }
}
window.addEventListener('scroll', changeTitle);


    return(
   
        <div className="about-me-container" >
            <video className="video-about" src={`${DOMAIN_URL}/assets/video-true.mp4`} autoPlay muted loop />
            <h2 className={title ? "about-me-title" : "title-none"}>Who i am ?</h2>
            <section className="presentation">
                <div className="textcontainer">
                    <h3 className="presentation-title">Florent desmarets to serv you !</h3>
                    <p className="presentation-description">I am a fullstack developer in Reactjs and nodejs, I also know how to use Mysql, Express, Javascript.</p>

                    <p className="presentation-description">I like to make a beautiful website with beautiful animations, graphic consistency and UX design are my strong points!</p>

                    <p className="presentation-description">I started web development with the wildcodeschool of Orléans where I learned everything from the work of this wonderful job.</p>

                    <p className="presentation-description">Realizing the dreams of my employees is my main mission.</p>

                    <p className="presentation-description">I look forward to working with you.</p>
                </div>
                <img src={`${DOMAIN_URL}/assets/dev-work.jpg`} alt="" className="dev-working"/>
            </section>
            <section className="skills-container">
                    <h3 className="skills-title">My Skills</h3>
                    <div className="skills-object">
                        <div className="react-card">
                            <img src={`${DOMAIN_URL}/assets/react.png`} alt="react" className="react-img"/>
                            <p className="react-text">React</p>
                        </div>
                        <div className="react-card">
                            <img src={`${DOMAIN_URL}/assets/javascript.png`} alt="react" className="react-img"/>
                            <p className="react-text">Javascript</p>
                        </div>
                        <div className="react-card">
                            <img src={`${DOMAIN_URL}/assets/mysql.png`} alt="react" className="react-img"/>
                            <p className="react-text">MySql</p>
                        </div>
                    </div>
            </section>
        </div>
      
       
    );
}