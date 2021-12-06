import React from 'react';
import './AboutMe.css';
import {DOMAIN_URL} from '../../Fetch'
import {useState, useEffect} from 'react';
import Footer from '../footer/Footer';


export default function AboutMe() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    

const [downArrowColor, setDownArrowColor]=useState(true);
const [downArrow, setDownArrow]=useState(true);
const [title, setTitle]=useState(true);

const changeTitle = () =>{
    if(window.scrollY>= 50) {
        setTitle(false)
    }else{
        setTitle(true)
    }
}
window.addEventListener('scroll', changeTitle);


const changeArrow = () =>{
    if(window.scrollY>= 50) {
        setDownArrow(false)
    }else{
        setDownArrow(true)
    }
}
window.addEventListener('mousemove', changeArrow);
window.addEventListener('scroll', changeArrow);

const changeArrowColor = () =>{
    if(window.scrollY>= 1500) {
        setDownArrowColor(false)
    }else if(window.scrollY<= 200) {
        setDownArrowColor(false)
    }else{
        setDownArrowColor(true)
    }
}
window.addEventListener('scroll', changeArrowColor);
window.addEventListener('mousemove', changeArrowColor);




    return(
   
        <div id="about-us-container" className="about-me-container" >
           <img className="background" src={`${DOMAIN_URL}/assets/gemetric2.jpg`} />
            <h2 id="who-i-am" className={title ? "about-me-title" : "title-none"}>Who i am ?</h2>
            <a href="#presentation-section">
                <img src={`${DOMAIN_URL}/assets/down-arrow.png`} alt="" className={downArrow ? "down-arrow" : "no-down-arrow"}/>
            </a>
            <a  href="#skills-section">
                <img src={`${DOMAIN_URL}/assets/down-arrow.png`} alt="" className={downArrowColor ? "down-arrow-color" : "no-down-arrow"}/>
            </a>
            <section id="presentation-section" className="presentation">
                <div className="textcontainer">
                    <h3 className="presentation-title">Florent desmarets to serv you !</h3>
                    <p className="presentation-description">I am a fullstack developer in Reactjs and nodejs, I also know how to use Mysql, Express, Javascript.</p>

                    <p className="presentation-description">I like to make a beautiful website with beautiful animations, graphic consistency and UX design are my strong points!</p>

                    <p className="presentation-description">I started web development with the wildcodeschool of Orléans where I learned everything from the work of this wonderful job.</p>

                    <p className="presentation-description">Realizing the dreams of my employees is my main mission.</p>

                    <p className="presentation-description">I look forward to working with you.</p>
                </div>
                <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light' alt="" className="dev-working"/>
            </section>
            <section id="skills-section" className="skills-container">
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
            <Footer/>
        </div>
      
       
    );
}