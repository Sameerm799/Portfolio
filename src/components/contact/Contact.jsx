import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fdd5igm', 'template_kdbx28f', form.current, 'ko5wIUnyj_8svuErk')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h1>Contact Me</h1>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sameerm799@gmail.com</h5>
            <a href="mailto:sameerm799@gmail.com" target="_blank">Send a message</a>
          </article>
          
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+1 (604)-500-6041</h5>
            <a href="https://api.whatsapp.com/send?phone=16045006041" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact