import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {LiaTelegramPlane} from 'react-icons/lia'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
   const form = useRef()

   const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_9tcbz12', 'template_ptn0ih9', form.current, 'd1MYsodJYRfHoFAmm')
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        e.target.reset()
    };

 return (
   <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
         <div className="contact__items">
            <article className="contact__item">
               <MdOutlineEmail className='contact__item-icon' />
               <h4>Email</h4>
               <h5>anna_sater@gmail.com</h5>
               <a href="mailto:anna_santer@gmail.com">Send a message</a>
            </article>

            <article className="contact__item">
               <LiaTelegramPlane className='contact__item-icon' />
               <h4>Telegram</h4>
               <h5>anna_santer</h5>
               <a href="https://t.me/Telegram">The official channel</a>
            </article>

            <article className="contact__item">
               <BsWhatsapp className='contact__item-icon' />
               <h4>WhatsApp</h4>
               <h5>123-456-789</h5>
               <a href="https://api.whatsapp.com/send?phone+1234567898">Call me</a>
            </article>
         </div>
         <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your Email' required />
            <textarea rows="7" name="message" placeholder='Your Message' required />
            <button type="submit" className='btn btn-primary'>Send Message</button>
         </form>
      </div>
   </section>
 )
}

export default Contact