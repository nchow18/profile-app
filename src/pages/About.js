import React from 'react';
import Photo from '../assets/profile.JPG'
import '../css/About.css';

function About() {
  return (
    <section>
      <div className="page-format">
        <div className="page-content about-content">
          <div className="about-font">
            ABOUT
          </div>
          <img src={Photo} alt="my-img" className="about-profile-img"/>
          <img src={Photo} alt="my-img" className="about-profile-img"/>
          <img src={Photo} alt="my-img" className="about-profile-img"/>
          <img src={Photo} alt="my-img" className="about-profile-img"/>
          <img src={Photo} alt="my-img" className="about-profile-img"/>
          <img src={Photo} alt="my-img" className="about-profile-img"/>
        </div>
      </div>
    </section>
  )
}

export default About;