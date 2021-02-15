import { useEffect, useState } from 'react';
import axios from 'axios';
import { FETCH } from '../../Fetch';
import { DOMAIN_URL} from '../../Fetch'
import './../contact/Contact.css'

const Contact = () => {


    const handleSubmited = () => {
    axios.post(`${FETCH}/contact`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }


    

    return (
        <div className="admin-container">
            <video className="video-about" src={`${DOMAIN_URL}/assets/video-true.mp4`} autoPlay muted loop />
            <h1 className="main-title-contact">Contact me</h1>
            <section className="form-container">
                <form onSubmit={handleSubmited} action={`${FETCH}/contact`} method="post" target="BLANK">
                    <div className="label-text-container">
                        <label className="label-text" for="name">Name</label>
                        <input type="text" id="name" name="name"/>
                    </div>
                    <div className="label-text-container">
                        <label className="label-text" for="message">Message</label>
                        <textarea id="msg" name="message"></textarea>
                    </div>
                    <button className="label-text">Send</button>
                </form>
            </section>
        </div>
    );
}

export default Contact;