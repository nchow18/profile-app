import React from 'react';
import Photo from '../assets/profile.JPG'
import '../css/About.css';
import Plane from '../assets/airplane.png';
import Cloud1 from '../assets/cloud1.png';
import Sun from '../assets/sun.png';

function About() {
  return (
    <section>
      <div className="page-format">
        <div className="page-content about-content">
          <span className="about-me">ABOUT ME</span>
          <div className="about-font">
            NATHAN CHOW
          </div>
          <div className="about-flex">
            <label for="learn-more"><i class="fas fa-search-plus learn-more-font"></i></label>
          <input type="checkbox" id="learn-more" />
            <div className="about-picture-container">

              <img src={Photo} alt="my-img" className="about-profile-img"/>
              
            </div>
            <div className="about-details">
              <p>I'm currently majoring in Full-stack Coding, as a recent graduate from University of Toronto as a full-stack developer.</p>
              <p>My abilities to work in the Back and Front-end development, helps me work on full projects, from beginning to end.</p>
              <p>This porfolio includes work that I've worked in school, personal projects and clients.</p>
            </div>
          </div>
          <div className="about-animation">
            <input type="checkbox" id="plane"/>
            <label for="plane" className="fly-font">LIFT OFF</label>
            <label for="plane" className="fly-again">TAKE OFF</label>

            <img src={Plane} alt="plane" className="airplane-img"/>
            <img src={Cloud1} alt="cloud1" className="cloud1-img"/>
            <img src={Cloud1} alt="cloud1" className="cloud2-img"/>
            <img src={Cloud1} alt="cloud1" className="cloud3-img"/>
            <img src={Cloud1} alt="cloud1" className="cloud4-img"/>
            <img src={Sun} alt="sun" className="sun-img" />
          </div>
          <div className="background-sky"></div>
        </div>
      </div>
    </section>
  )
}

export default About;