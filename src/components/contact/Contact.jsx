import {  useState } from 'react';
import { DOMAIN_URL} from '../../Fetch'
import './../contact/Contact.css'
import 'react-confirm-alert/src/react-confirm-alert.css';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
  
      sendFeedback("template_od2uhc6", {
        name,
        email,
        message,
      });
    };

    const sendFeedback = (templateId, variables) => {

      window.emailjs
        .send("service_7i5b1kj", templateId, variables)
        .then((res) => {
          console.log('success !');
          setName("");
          setEmail("");
          setMessage("");
          document.querySelector('.form-message').innerHTML =
          "Your email has been send.";
        })
        .catch(
          (err) =>
            document.querySelector('.form-message').innerHTML =
              "Une erreur s'est produite, veuillez réessayer.")
    };
  
  
    

    return (
        <div className="admin-container">
            <img className="background" src={`${DOMAIN_URL}/assets/gemetric2.jpg`} alt="background"/>
            <section className="form-container">
                <section id="contact">
                    <div className="container">
                      <div className="heading-wrapper">
                        <div className="heading">
                          <p className="contact-title">
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
                        <input placeholder="Name *" name="name" type="text" required htmlFor="name" value={name} onChange={e => setName(e.target.value)}/>
                        <input placeholder="Email *" name="email" type="email" required htmlFor="email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <textarea placeholder="Message *" type="text" name="message" htmlFor="message" value={message} onChange={e => setMessage(e.target.value)} />
                        <input className="button" id="submit" value="Submit" type="submit" />
                        <div className="form-message"></div>
                      </form>
                    </div>
                </section>
            </section>
         </div>
    );
}

export default Contact;

