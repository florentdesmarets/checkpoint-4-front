import React from 'react';
import './AboutMe.css';
// import {DOMAIN_URL} from '../../Fetch'
import {useEffect} from 'react';
// import Footer from '../footer/Footer';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTranslation } from "react-i18next";
import Background from '../background/Background';

export default function AboutMe() {

    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    
    return(
   
        <div id="about-us-container" className="about-me-container" >
            <Background/>
            <Carousel id="presentation-section" className="presentation" useKeyboardArrows={true} stopOnHover={true} showStatus={false} showThumbs={false} autoPlay={true} interval={10000} transitionTime={1000} infiniteLoop={true}>
                    <h2 id="who-i-am" className="about-me-title">{t('common.translated-about-title')}</h2>
                    <div className="textcontainer">
                        <h3 className="presentation-title">{t('common.translated-about-second-title')}</h3>
                        <p className="presentation-description">{t('common.translated-about-line1')}</p>

                        <p className="presentation-description">{t('common.translated-about-line2')}</p>

                        <p className="presentation-description">{t('common.translated-about-line3')}</p>

                        <p className="presentation-description">{t('common.translated-about-line4')}</p>

                        <p className="presentation-description">{t('common.translated-about-line5')}</p>
                        <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light' alt="" className="dev-working"/>
                    </div>
                    <div id="skills-section" className="skills-container">
                    <h3 className="skills-title">{t('common.translated-about-third-title')}</h3>
                    <div className="skills-object">
                        <a className='link' href="https://fr.reactjs.org/" target="_blank" rel='noreferrer'>
                            <div className="react-card">
                                <img src="https://github.com/florentdesmarets/Image-storage/blob/main/Portfolio%20Website/react.png?raw=true" alt="react" className="react-img"/> 
                                <p className="react-text">React</p>
                            </div>
                        </a>
                        <a className='link' href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" rel='noreferrer'>
                            <div className="react-card">
                                <img src="https://github.com/florentdesmarets/Image-storage/blob/main/Portfolio%20Website/javascript.png?raw=true" alt="react" className="react-img"/> 
                                <p className="react-text">Javascript</p>
                            </div>
                        </a>
                        <a className='link'  href="https://www.mysql.com/fr/" target="_blank" rel='noreferrer'>
                            <div className="react-card">
                                <img src="https://github.com/florentdesmarets/Image-storage/blob/main/Portfolio%20Website/mysql.png?raw=true" alt="react" className="react-img"/>
                                <p className="react-text">MySql</p>
                            </div>
                        </a>
                    </div>  
                </div>
                <div  className="passion-container">
                    <h3 className="passion-title">{t('common.translated-about-fourth-title')}</h3> 
                    <p className='presentation-description'>{t('common.translated-about-line6')}</p>  
                      <div className='spotify-container'> <iframe title="spotify-player" src="https://open.spotify.com/embed/track/1RKUoGiLEbcXN4GY4spQDx?utm_source=generator&theme=0" width="10%" height="100" frameBorder="0" allowfullscreen="" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></div>   
                      <p className='presentation-description'>{t('common.translated-about-line7')} </p>      
                      <a href='/'><iframe className='youtube-japan' width="50" height="315" src="https://www.youtube.com/embed/G5RpJwCJDqc?autoplay=1&controls=0&showinfo=0&loop=1&mute=1" title="YouTube video player"  frameborder="0" allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe></a>                    
                </div>
            </Carousel>
            {/* <Footer/> */}
        </div>
      
       
    );
}