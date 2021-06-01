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
          <div className="about-font">
            ABOUT ME
          </div>
          <div className="about-animation">
            <input type="checkbox" id="plane"/>
            <label for="plane" className="fly-font">LIFT OFF</label>
            <label for="plane" className="fly-again">TAKE OFF</label>
            <img src={Photo} alt="my-img" className="about-profile-img"/>
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