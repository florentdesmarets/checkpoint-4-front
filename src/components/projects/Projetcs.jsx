import React from 'react';
import './Projects.css';
// import {DOMAIN_URL} from '../../Fetch'
import { useEffect} from 'react';
// import axios from 'axios';
// import { FETCH } from './../../Fetch';
// import Footer from '../footer/Footer';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    

    // const [projects, setProjects] = useState([]);


    //     useEffect(() => {
    //         const fetchProjects = () => {
    //             axios
    //             .get(`${FETCH}/projects`)
    //             .then(res => setProjects(res.data))
    //         }
    //         fetchProjects()
    //     }, [])

    return(
   
        <div className="Projects-container" >
            <img className="background" src="https://github.com/florentdesmarets/checkpoint-4-front/blob/main/public/assets/gemetric2.jpg?raw=true" alt='background' />
            <Carousel id="presentation-project" className="presentation" showStatus={false} showThumbs={false} useKeyboardArrows={true} autoPlay={true} interval={10000} transitionTime={1000} infiniteLoop={true}>
            <h2 className="about-me-title">Let me show my talent with projects i had already do</h2>
                <div className="textcontainer">
                    <h3 className="presentation-title">More projects, more experience, more creativity</h3>
                    <p className="presentation-description">Creating projects is essential to progress as a developer, with wild code, school I chained Hackathon and projects which gave me a good overview of the developer's work</p>

                    <p className="presentation-description">I like to make a beautiful website with beautiful animations, graphic consistency and UX design are my strong points!</p>

                    <p className="presentation-description">I started web development with the wildcodeschool of Orléans where I learned everything from the work of this wonderful job.</p>

                    <p className="presentation-description">Realizing the dreams of my employees is my main mission.</p>

                    <p className="presentation-description">I look forward to working with you.</p>
                    <img src="https://github.com/florentdesmarets/checkpoint-4-front/blob/main/public/assets/web-dev.jpg?raw=true" alt="" className="dev-picture"/>
                </div>
                <div id="project-container" className="skills-container">
                    <h3 className="skills-title">Projects</h3>
                    {/* <div className="skills-object">
                        {projects.map((projects) => (
                            <div key={projects.id} className="react-card">
                                <a href={`${DOMAIN_URL}/upload/${projects.project_link}`}><img src={`${DOMAIN_URL}/upload/${projects.project_image}`} alt="project" className="react-img"/></a>
                                <p className="react-text">{projects.project_title}</p>
                            </div>
                        ))
                        }
                    </div> */}
                    <div className="skills-object">
                        
                            <div className="react-card">
                                <a href="http://www.cjftennis.com/" ><img src="https://github.com/florentdesmarets/checkpoint-4-front/blob/main/public/upload/logo-cjf.jpeg?raw=true" alt="cjftennis" className="react-img"/></a>
                                <p className="react-text">CJF TENNIS</p>
                            </div>
                            <div className="react-card">
                                <a href="https://comparateuragricole.com/" ><img src="https://yt3.ggpht.com/ytc/AKedOLRGMj2Uo5pxYEzyXj6m5fh_ID36Le39bEjeAcWo=s900-c-k-c0x00ffffff-no-rj" alt="comparateuragricole" className="react-img"/></a>
                                <p className="react-text">Farmers Hackathon</p>
                            </div>
                            <div className="react-card">
                                <a href="/" ><img src="https://github.com/florentdesmarets/checkpoint-4-front/blob/main/public/upload/logo-msh.png?raw=true" alt="logomsh" className="react-img"/></a>
                                <p className="react-text">My Sup'r Hero</p>
                            </div>

                    </div>
                </div>
            </Carousel>
            {/* <Footer/> */}
        </div>
      
       
    );
}