import { useEffect, useState } from 'react';
import axios from 'axios';
import { FETCH } from '../../Fetch';
import { DOMAIN_URL} from '../../Fetch'
import './../create-project/CreateProject.css'
import {Link} from "react-router-dom";

const CreateProject = () => {
    
    const handleSubmited = () => {
        axios.post(`${FETCH}/projects`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
    

    return (
        <div className="create-project-container">
            <video className="video-about" src={`${DOMAIN_URL}/assets/video-true2.mp4`} autoPlay muted loop />
            <h1 className="main-title-create-project ">Create project</h1>
            <form className="form-create-project" onSubmit={handleSubmited} action={`${FETCH}/projects`} method="post" target="BLANK">
                    <div className="label-text-container">
                        <label className="label-text" for="project_title">Project Name</label>
                        <input type="text" id="project_title" name="project_title"/>
                    </div>
                    <div className="button-container">
                        <button className="label-text">Add photo</button>
                        <button className="label-text-create-project">Add project</button>
                    </div>
                </form>
        </div>
    )

}

export default CreateProject;

