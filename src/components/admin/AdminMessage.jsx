import { useEffect, useState } from 'react';
import axios from 'axios';
import { FETCH } from '../../Fetch';
import { DOMAIN_URL} from '../../Fetch'
import './../admin/Admin.css'
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


const AdminMessage = () => {
    const [message, setMessage] = useState([]);
    
    useEffect(() => {
        const fetchMessage = () => {
            axios
            .get(`${FETCH}/contact`)
            .then(res => setMessage(res.data))
        }
        fetchMessage()
    })





    return (
        <div className="admin-message-container">
            <video className="video-about" src={`${DOMAIN_URL}/assets/video-true2.mp4`} autoPlay muted loop />
            <h1 className="main-title-admin">Admin Section</h1>
            <section className="message-user-container">
                <h2 className="message-admin-title">Messages from users</h2>
                {message.lenght < 0 ? "No message" :  
                <div className="message-list">
                    {message.map((message) => (
                        <div key={message.id} className="message-container">
                            <p className="name-contact">{message.name}</p>
                            <p className="message-contact">{message.message}</p>
                                <img src={`${DOMAIN_URL}/assets/remove.png`} alt="remove" className="remove"  onClick={
                                         () => {

                                            if(!confirmAlert({title : "Supprimer", message : "Êtes vous sûr de vouloir supprimer ce message ?" ,buttons: [
                                                {
                                                  label: 'Oui',
                                                  onClick: () => 
                                    
                                                  axios.delete(`${FETCH}/contact/${message.id}`)
                                                },
                                                {
                                                  label: 'Non',
                                                  
                                                }
                                              ]})) {
                                               
                                            }
                                     
                                        
                                    }
                                }/>
                        </div>
                    ))
                    }
                </div>
                }
            </section>
        </div>
    )

}

export default AdminMessage;

