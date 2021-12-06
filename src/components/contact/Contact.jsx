import {  useState } from 'react';
import axios from 'axios';
import { FETCH } from '../../Fetch';
import { DOMAIN_URL} from '../../Fetch'
import './../contact/Contact.css'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Contact = () => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${FETCH}/contact`, { name : name, message : message}) 
        .then(!confirmAlert({
            title : "Thanks You !", 
            message : "Your message has been succesfully send ! 📬 ", 
            buttons : [{ label : "I am a great guy",
             onClick:() => {window.location.reload(true)}
            }]
        }))
       .then(res => {
        console.log(res);
        console.log(res.data);
        })
        }
    
    

    return (
        <div className="admin-container">
            <img className="background" src={`${DOMAIN_URL}/assets/gemetric2.jpg`} />
            <section className="form-container">
            <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Please, use the form below, contact me by my social networks or send an email to {''}
              <span className="mail">
                florent.
                <i className="fas fa-at at" />
                desmarets
                <i className="fas fa-circle dot" />
                @gmail.com
              </span>
              :
            </p>
          </div>
        </div>
        <form id="contact-form" onSubmit={handleSubmit}>
          <input placeholder="Name" name="name" type="text" required htmlFor="name" onChange={e => setName(e.target.value)}/>
          <textarea placeholder="Message" type="text" name="message" htmlFor="message" onChange={e => setMessage(e.target.value)} />
          <input className="button" id="submit" value="Submit" type="submit" />
        </form>
      </div>
    </section>
                {/* <form onSubmit={handleSubmit} >
                    <div className="label-text-container">
                        <label className="label-text" htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="label-text-container">
                        <label className="label-text" htmlFor="message" >Message</label>
                        <textarea id="message" name="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    </div>
                    <div className="button-container">
                        <button className="submit-button" >Send</button>
                    </div>  
                </form> */}
            </section>
        </div>
    );
}

export default Contact;

