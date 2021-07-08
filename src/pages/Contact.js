import React, { useState } from 'react';
import '../css/Contact.css';

function Contact(props) {

  const {
    setContactModal
  } = props

    return (
      <div className="contact-modal" onClick={() => {setContactModal(false)}}>
        <div>
          <span><i class="fab fa-github" onClick={() => {window.open('https://github.com/nchow18')}}></i></span>
          <span><i class="fab fa-instagram" onClick={() => {window.open('https://www.instagram.com/_nathan_chow/')}}></i></span>
          <span><i class="fab fa-linkedin-in" onClick={() => {window.open('https://www.linkedin.com/in/nathan-chow-1999701b9/')}}></i></span>
          <span>emailme@nathanchow.ca</span>
        </div>
      </div>
    )
}

export default Contact;