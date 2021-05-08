import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
              }
          } 

        if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        }

        console.log('errorMessage', errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
      
    console.log(formState);

    return (
        <section>
            <div className="center-card">
                <h1>Contact me</h1>
                <form id="contact-form" onSubmit={handleSubmit}>
                <div className="contact-column">
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div className="contact-column">
                    <label htmlFor="email">Email address:</label>
                    <input defaultValue={email} onChange={handleChange} type="email" name="email" />
                </div>
                <div className="contact-column">
                    <label htmlFor="message">Message:</label>
                    <textarea defaultValue={message} onChange={handleChange} name="message" rows="5"  />
                </div>
                    {errorMessage && (
                    <div>
                    <p className="error-text">{errorMessage}</p>
                    </div>
                    )}
                <button type="submit">Submit</button>
                </form>
            </div>
            <div id="background-img4"></div>
            <div id="pop-background2"></div> 
        </section>
    )
}

export default ContactForm;