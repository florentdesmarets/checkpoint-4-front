import React from 'react';
import './Projects.css';
import {DOMAIN_URL} from '../../Fetch'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { FETCH } from './../../Fetch';
import Footer from '../footer/Footer';

export default function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    

    const [projects, setProjects] = useState([]);
    const [downArrowColor, setDownArrowColor]=useState(true);
    const [downArrow, setDownArrow]=useState(true);
    const [title, setTitle]=useState(true);

        useEffect(() => {
            const fetchProjects = () => {
                axios
                .get(`${FETCH}/projects`)
                .then(res => setProjects(res.data))
            }
            fetchProjects()
        }, [])
    
console.log(projects)

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
window.addEventListener('mousemove', changeArrowColor);
window.addEventListener('scroll', changeArrowColor);



    return(
   
        <div className="Projects-container" >
            <img className="background" src={`${DOMAIN_URL}/assets/gemetric2.jpg`} />
            <h2 className={title ? "about-me-title" : "title-none"}>Let me show my talent with projects i had already do</h2>
            <a href="#presentation-project">
                <img src={`${DOMAIN_URL}/assets/down-arrow.png`} alt="" className={downArrow ? "down-arrow" : "no-down-arrow"}/>
            </a>
            <a  href="#project-container">
                <img src={`${DOMAIN_URL}/assets/down-arrow.png`} alt="" className={downArrowColor ? "down-arrow-color" : "no-down-arrow"}/>
            </a>
            <section id="presentation-project" className="presentation">
                <img src={`${DOMAIN_URL}/assets/web-dev.jpg`} alt="" className="dev-picture"/>
                <div className="textcontainer">
                    <h3 className="presentation-title">More projects, more experience, more creativity</h3>
                    <p className="presentation-description">Creating projects is essential to progress as a developer, with wild code, school I chained Hackathon and projects which gave me a good overview of the developer's work</p>

                    <p className="presentation-description">I like to make a beautiful website with beautiful animations, graphic consistency and UX design are my strong points!</p>

                    <p className="presentation-description">I started web development with the wildcodeschool of Orléans where I learned everything from the work of this wonderful job.</p>

                    <p className="presentation-description">Realizing the dreams of my employees is my main mission.</p>

                    <p className="presentation-description">I look forward to working with you.</p>
                </div>
            </section>
            <section id="project-container" className="skills-container">
                    <h3 className="skills-title">Projects</h3>
                    <div className="skills-object">
                        {projects.map((projects) => (
                            <div key={projects.id} className="react-card">
                                <img src={`${DOMAIN_URL}/upload/${projects.project_image}`} alt="project" className="react-img"/>
                                <p className="react-text">{projects.project_title}</p>
                            </div>
                        ))
                        }
                    </div>
            </section>
            <Footer/>
        </div>
      
       
    );
}