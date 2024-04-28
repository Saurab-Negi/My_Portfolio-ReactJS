import './Contact.css'
import emailjs from '@emailjs/browser'; //Used to get the information of the sender whoever is contacting you
import React, { useContext, useRef, useState } from "react";
import { themeContext } from "../../Context";

function Contact() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const [done, setDone]= useState(false) //It is used here to reply for the incoming message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sixkh58', 'template_40dp84v', form.current, {
        publicKey: 'EJXUnqSstEQwSf9q-',
      })
      .then(() => { console.log('SUCCESS!');
        setDone(true); },
        (error) => { console.log('FAILED...', error.text); },
      );
  };

  return (
    <div className='contact-form' id='Contact'>
      <div className="w-left">
        <div className="s-details">
          <span style={{color: darkMode?'white': ''}}>Get in touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
      </div>
      <div className="c-right">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='user_name' className="user" placeholder='Name' required />
        <input type="text" name='user_email' className="user" placeholder='Email' required />
        <textarea name='message' className='user' placeholder='Message' required />
        <input type="submit" value="Send" className='button' />
        <span>{done && "Arigatou gozaimasu! for contacting"}</span>
        <div className="blur c-blur" style={{background:"var(--purple)"}}></div>
      </form>
      </div>
    </div>
  )
}

export default Contact
