import React from 'react';
import './Projects.css';
// import {DOMAIN_URL} from '../../Fetch'
import { useEffect} from 'react';
// import axios from 'axios';
// import { FETCH } from './../../Fetch';
// import Footer from '../footer/Footer';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTranslation } from "react-i18next";
import Background from "../background/Background"

export default function Projects() {


    const { t } = useTranslation();

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
            <Background/>
            <Carousel id="presentation-project" className="presentation" showStatus={false} showThumbs={false} useKeyboardArrows={true} autoPlay={true} interval={10000} transitionTime={1000} infiniteLoop={true}>
                <div>
                    <h2  className="about-me-title">{t('common.translated-project-title')}</h2>
                    <a className="button-discover" href="#project-text">{t('common.translated-button-show2')}</a>
                </div>
                <div className="textcontainer" id="project-text">
                    <h3 className="presentation-title">{t('common.translated-project-second-title')}</h3>
                    <p className="presentation-description">{t('common.translated-project-line1')}</p>

                    <p className="presentation-description">{t('common.translated-project-line2')}</p>

                    <p className="presentation-description">{t('common.translated-project-line3')}</p>

                    <p className="presentation-description">{t('common.translated-project-line4')}</p>

                    <p className="presentation-description">{t('common.translated-project-line5')}</p>
                    <img src="https://github.com/florentdesmarets/Image-storage/blob/main/Portfolio%20Website/web-dev.jpg?raw=true" alt="" className="dev-picture"/>
                </div>
                <div id="project-container" className="skills-container">
                    <h3 className="skills-title">{t('common.translated-project-third-title')}</h3>
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
                            <a className="link" href="http://www.cjftennis.com/" target="_blank"rel='noreferrer' >
                                <div className="react-card">
                                    <img src="https://github.com/florentdesmarets/Image-storage/blob/main/Portfolio%20Website/logo-cjf.jpeg?raw=true" alt="cjftennis" className="react-img"/>
                                    <p className="react-text">CJF TENNIS</p>
                                </div>
                            </a>
                            <a className="link" href="https://comparateuragricole.com/" target="_blank"rel='noreferrer'  >
                                <div className="react-card">
                                    <img src="https://github.com/florentdesmarets/Image-storage/blob/main/Portfolio%20Website/comparateur.jpg?raw=true" alt="comparateuragricole" className="react-img"/>
                                    <p className="react-text">Farmers Hackathon</p>
                                </div>
                            </a>    
                            <a className="link" href="/" target="_blank" rel='noreferrer'>
                                <div className="react-card">
                                <img src="https://github.com/florentdesmarets/Image-storage/blob/main/Portfolio%20Website/logo-msh.png?raw=true" alt="msh" className="react-img"/>
                                    <p className="react-text">My Sup'r Hero</p>
                                </div>
                            </a>
                    </div>
                </div>
            </Carousel>
            {/* <Footer/> */}
        </div>
      
       
    );
}