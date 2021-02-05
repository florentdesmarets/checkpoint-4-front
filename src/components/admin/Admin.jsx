import { useEffect, useState } from 'react';
import axios from 'axios';
import { FETCH } from '../../Fetch';
import { DOMAIN_URL} from '../../Fetch'
import './../admin/Admin.css'
import {Link} from "react-router-dom";

const Admin = () => {
    const [projects, setProjects] = useState([]);
    const [message, setMessage] = useState([]);

    useEffect(() => {
        const fetchProjects = () => {
            axios
            .get(`${FETCH}/projects`)
            .then(res => setProjects(res.data))
        }
        fetchProjects()
    }, [])

    

    useEffect(() => {
        const fetchMessage = () => {
            axios
            .get(`${FETCH}/contact`)
            .then(res => setMessage(res.data))
        }
        fetchMessage()
    })

    console.log(message)
    return (
        <div className="admin-container">
            <video className="video-about" src={`${DOMAIN_URL}/assets/video-true2.mp4`} autoPlay muted loop />
            <h1 className="main-title-admin">Admin Section</h1>
            <section className="project-container">
            <h2 className="project-admin-title">My Projects</h2>
                <button className="add-project-button"><Link className="links" to="/new-project">Add projects</Link></button>
                <div className="project-list">
                        {projects.map((projects) => (
                    <div key={projects.id} className="project-card">
                        <img className="project-img" src={`${DOMAIN_URL}/upload/${projects.project_image}`} alt="project" className="project-img"/>
                        <p className="project-text">{projects.project_title}</p>
                        <img src={`${DOMAIN_URL}/assets/remove.png`} alt="remove" className="remove-project"  onClick={() => {
                                axios.delete(`${FETCH}/projects/${projects.id}`)
                                    .then(res => console.log(res))
                                    .catch(err => console.log(err));}}/> 
                    </div>
                            ))
                            }
                </div>
            </section>
            <section className="message-user-container">
                <h2 className="message-admin-title">Messages from users</h2>
                <div className="message-list">
                    {message.map((message) => (
                        <div key={message.id} className="message-container">
                            <p className="name-contact">{message.name}</p>
                            <p className="message-contact">{message.message}</p>
                                <img src={`${DOMAIN_URL}/assets/remove.png`} alt="remove" className="remove"  onClick={() => {
                                axios.delete(`${FETCH}/contact/${message.id}`)
                                    .then(res => console.log(res))
                                    .catch(err => console.log(err));}}/> 
                        </div>
                    ))
                    }
                </div>
            </section>
        </div>
    )

}

export default Admin;

