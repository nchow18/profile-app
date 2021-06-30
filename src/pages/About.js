import React from 'react';
import Photo from '../assets/profile.JPG'
import Square from '../assets/square-profile.png';
import '../css/About.css';

function About() {
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
    </section>
  )
}

export default About;