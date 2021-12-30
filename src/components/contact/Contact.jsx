import {  useState } from 'react';
import './../contact/Contact.css'
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useTranslation } from "react-i18next";
import Background from '../background/SecondBackground'


const Contact = () => {

const { t } = useTranslation();

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
          "Votre email à bien été envoyé !";
        })
        .catch(
          (err) =>
            document.querySelector('.form-message').innerHTML =
              "Une erreur s'est produite, veuillez réessayer.")
    };
  
  
    

    return (
        <div className="admin-container">
          <Background/>
            <section className="form-container">
                <section id="contact">
                    <div className="container">
                      <div className="heading-wrapper">
                        <div className="heading">
                          <p className="contact-title">
                          {t('common.translated-contact-title1')} <br />
                          {t('common.translated-contact-title2')}
                          </p>
                          <p className="separator" />
                          <p className="subtitle">
                          {t('common.translated-contact-line1')} {''}
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
                        <input placeholder={t('common.translated-contact-input1')}  name="name" type="text" required htmlFor="name" value={name} onChange={e => setName(e.target.value)}/>
                        <input placeholder={t('common.translated-contact-input2')}   name="email" type="email" required htmlFor="email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <textarea placeholder={t('common.translated-contact-input3')}   type="text" name="message" htmlFor="message" value={message} onChange={e => setMessage(e.target.value)} />
                        <input className="button" id="submit" value={t('common.translated-contact-input4')}   type="submit" />
                        <div className="form-message"></div>
                      </form>
                    </div>
                </section>
            </section>
         </div>
    );
}

export default Contact;

