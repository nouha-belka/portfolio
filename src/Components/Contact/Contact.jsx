import React from 'react'
import "./Contact.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg"

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div class="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div class="contact-section">
        <dic class="contact-left">
            <h1>Lest's Talk</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero perferendis nesciunt velit, sint at quod voluptas laudantium excepturi commodi totam architecto illum quia consequuntur reiciendis? Sit harum distinctio aliquid ipsa?</p>
            <div class="contact-details">
                <div class="contact-detail">
                    <img src={mail_icon} alt=""/>
                    <p>nouhabelka2001@gmai.com</p>
                </div>
                <div class="contact-detail">
                    <img src={location_icon} alt=""/>
                    <p>+1 571-591-9183</p>
                </div>
                <div class="contact-detail">
                    <img src={call_icon} alt=""/>
                    <p>VA, United States</p>
                </div>
            </div>
        </dic>
        <form  class="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your email</label>
            <input type="text" placeholder='Enter your email' name='email'/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='sumit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
