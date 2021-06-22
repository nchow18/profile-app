import React from 'react';
import Photo from '../assets/profile.JPG'
import '../css/About.css';
import Plane from '../assets/airplane.png';
import Cloud1 from '../assets/cloud1.png';
import Sun from '../assets/sun.png';

function About() {
  return (
    <section>
      <div className="about-picture-container">
        <img src={Photo} alt="my-img" className="about-profile-img"/>
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