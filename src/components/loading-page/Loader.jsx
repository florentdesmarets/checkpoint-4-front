import React from 'react';
import "./Loader.css"
import Background from '../background/Background';

export default function Loader() {

  
    return (
        <div className="loader-container" >
            <Background/>
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