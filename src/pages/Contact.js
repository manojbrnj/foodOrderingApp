import React from 'react';
import '../styles/Contact.css';
import ContactImage from '../assets/food.jpeg';
function Contact(props) {
    return (
        <div className='contact'>
            <div className="leftSide" style={{backgroundImage:`url(${ContactImage})`}}></div>
            <div className="rightSide">
                <h1>ContactUs</h1>
                <form id='contact-form' method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" type="text" placeholder='Enter your Name' />
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" placeholder='Enter your Email' />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" type="text" placeholder='Enter your Message' />
                     <button type="submit">SendMessage</button>
                </form>
            </div>
        </div>
    );
}
export default Contact;