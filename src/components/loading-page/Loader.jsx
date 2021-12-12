import React from 'react';
import "./Loader.css"

export default function Loader() {

  
    return (
        <div className="loader-container" >
            <img className="background-loader" src="https://github.com/florentdesmarets/checkpoint-4-front/blob/main/public/assets/gemetric2.jpg?raw=true" alt="background"/>
            <h1 className='loading-title'>LOADING</h1>
            <div className='loader'>
                <div className="ball1"></div>
                <div className="ball2"></div>
                <div className="ball3"></div>
                <div className="ball4"></div>
                <div className="ball5"></div>
            </div>
        </div>


    );
}