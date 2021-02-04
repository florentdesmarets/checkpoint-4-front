import React from 'react';
import './Projects.css';
import {Link} from "react-router-dom";
import {DOMAIN_URL} from '../../Fetch'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { FETCH } from './../../Fetch';


export default function Projects() {

    const [projects, setProjects] = useState([]);

        useEffect(() => {
            const fetchProjects = () => {
                axios
                .get(`${FETCH}/projects`)
                .then(res => setProjects(res.data))
            }
            fetchProjects()
        }, [])
    
console.log(setProjects)

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
   
        <div className="Projects-container" >
            <video className="video-about" src={`${DOMAIN_URL}/assets/video-true.mp4`} autoPlay muted loop />
            <h2 className={title ? "about-me-title" : "title-none"}>Let me show my talent with projects i had already do</h2>
            <section className="presentation">
                <img src={`${DOMAIN_URL}/assets/dev-picture.jpg`} alt="" className="dev-picture"/>
                <div className="textcontainer">
                    <h3 className="presentation-title">More projects, more experience, more creativity</h3>
                    <p className="presentation-description">Creating projects is essential to progress as a developer, with wild code, school I chained Hackathon and projects which gave me a good overview of the developer's work</p>

                    <p className="presentation-description">I like to make a beautiful website with beautiful animations, graphic consistency and UX design are my strong points!</p>

                    <p className="presentation-description">I started web development with the wildcodeschool of Orléans where I learned everything from the work of this wonderful job.</p>

                    <p className="presentation-description">Realizing the dreams of my employees is my main mission.</p>

                    <p className="presentation-description">I look forward to working with you.</p>
                </div>
            </section>
            <section className="skills-container">
                    <h3 className="skills-title">Projects</h3>
                    <div className="skills-object">
                        {projects.map((projects) => (
                            <div key={projects.id} className="react-card">
                            <img src={`${DOMAIN_URL}/upload/${projects.photos[0]}`} alt="project" className="react-img"/>
                            <p className="react-text">{projects.project_title}</p>
                        </div>
                        ))
                        }
                    </div>
            </section>
        </div>
      
       
    );
}