import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function Home() {
    const { t } = useTranslation();
    

    return(
   
        <div className="home-container" >
            <img className="background" src="https://github.com/florentdesmarets/checkpoint-4-front/blob/main/public/assets/gemetric2.jpg?raw=true" alt='background'/>
            {/* <div className="avatar"></div> */}
            <div className="text-container">
                <h2 className="hello"> <p>{t('common.translated-main-title1')}</p></h2>
                <h2 className="hello"> <p>{t('common.translated-main-title2')}</p></h2>
                <h2 className="hello"> <p>{t('common.translated-main-title3')}</p></h2>
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
                <Link className="links" to="/about-me"><div className="button1">{t('common.translated-button1')}</div></Link>
                <Link className="links" to="/contact"><div className="button2">{t('common.translated-button2')}</div></Link> 
            </div>
        </div>
      
       
    );
}