import React from 'react';
import './AboutMe.css';
import {DOMAIN_URL} from '../../Fetch'
import {useEffect} from 'react';
import Footer from '../footer/Footer';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function AboutMe() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    
    return(
   
        <div id="about-us-container" className="about-me-container" >
           <img className="background" src="https://github.com/florentdesmarets/checkpoint-4-front/blob/main/public/assets/gemetric2.jpg?raw=true"alt='background' />
            <Carousel id="presentation-section" className="presentation" showStatus={false} showThumbs={false} useKeyboardArrows={true} autoPlay={true} interval={10000} transitionTime={1000} infiniteLoop={true}>
                    <h2 id="who-i-am" className="about-me-title">Who i am ?</h2>
                    <div className="textcontainer">
                        <h3 className="presentation-title">Florent desmarets to serv you !</h3>
                        <p className="presentation-description">I am a fullstack developer in Reactjs and nodejs, I also know how to use Mysql, Express, Javascript.</p>

                        <p className="presentation-description">I like to make a beautiful website with beautiful animations, graphic consistency and UX design are my strong points!</p>

                        <p className="presentation-description">I started web development with the wildcodeschool of Orléans where I learned everything from the work of this wonderful job.</p>

                        <p className="presentation-description">Realizing the dreams of my employees is my main mission.</p>

                        <p className="presentation-description">I look forward to working with you.</p>
                        <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light' alt="" className="dev-working"/>
                    </div>
                    <div id="skills-section" className="skills-container">
                    <h3 className="skills-title">My Skills</h3>
                    <div className="skills-object">
                        <div className="react-card">
                            <a href="https://fr.reactjs.org/" target="_blank" rel='noreferrer'><img src={`${DOMAIN_URL}/assets/react.png`} alt="react" className="react-img"/> </a>
                            <p className="react-text">React</p>
                        </div>
                        <div className="react-card">
                            <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" rel='noreferrer'> <img src={`${DOMAIN_URL}/assets/javascript.png`} alt="react" className="react-img"/> </a>
                            <p className="react-text">Javascript</p>
                        </div>
                        <div className="react-card">
                            <a href="https://www.mysql.com/fr/" target="_blank" rel='noreferrer'><img src={`${DOMAIN_URL}/assets/mysql.png`} alt="react" className="react-img"/></a>
                            <p className="react-text">MySql</p>
                        </div>
                    </div>
            </div>
            </Carousel>
            <Footer/>
        </div>
      
       
    );
}