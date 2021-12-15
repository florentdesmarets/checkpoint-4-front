import React from 'react';
import "./Loader.css"
import Background from '../background/Background';

export default function Loader() {

  
    return (
        <div className="loader-container" >
            <Background/>
            <h1 className='loading-title'>LOADING</h1>
            <div class="drawing" id="loading">
		        <div class="loading-dot"></div>
	        </div>
        </div>


    );
}