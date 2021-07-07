import React, { useState, useEffect } from 'react';
import Photo from '../assets/profile.JPG'
import Square from '../assets/square-profile.png';
import '../css/About.css';

function About() {

  const [isModal, setModal] = useState(false)

  var [photos] = useState([]);

  photos = [];

  for (var i = 1; i < 35; i++) {
    photos.push(i)
  }



  const [currentPhoto, setPhoto] = useState(photos[0])

  // process.env.PUBLIC_URL

  return (
    <section>
      <div className="about-picture-container">
        <img src={Photo} alt="my-img" className="about-profile-img"/>
        <img src={Square} alt="my-img" className="square-profile-img"/>
      </div>
      <div className="about-details">
        <p>I'm currently majoring in Full-stack Coding, as a recent graduate from University of Toronto as a full-stack developer.</p>
        <p>My abilities to work in the Back and Front-end development, helps me work on full projects, from beginning to end.</p>
        <p>This porfolio includes work that I've worked in school, personal projects and clients.</p>
      </div>
      <div className="pictures-container">
        {photos.map((photo) => (
          <img key={photo} alt="ig" onClick={() => {setModal(true); setPhoto(photo)}} src={process.env.PUBLIC_URL + `/ig/${photo}.png`}/>
        ))}
        {isModal === true && (
          <div className="pictures-modal">
            <img alt="ig-modal" onClick={() => {setModal(false)}}src={process.env.PUBLIC_URL + `/ig/${currentPhoto}.png`}/>
          </div>
        )}

      </div>
    </section>
  )
}

export default About;