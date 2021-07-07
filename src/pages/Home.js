import React from 'react';
import '../css/Home.css';
import '../App.css';
import Pole from '../assets/pole.JPG'
import Load from './Load';

function Home() {
  return (
    <section>
      <div className="page-load">
        <Load />
      </div>
      <div className="page-format">
        <div className="page-content home-content">
          <img src={Pole} alt="pole"/>
          <div className="home-font">
            Nathan Chow
            <ul>
              <li>I live in <b>Toronto</b></li>
              <li>I am a <b>full-stack developer</b></li>
              <li>I lived in <b>Hong Kong</b></li>
              <li>I lived in <b>Vietnam</b></li>
              <li>I watch a lot of <b>movies</b> and TV series</li>
              <li>I am also a Mortgage Agent at <b>JP Mortgages</b></li>
              <li>I love <b>travelling</b> and traveled to majority of East Asia</li>
              <li>I love creating and writing <b>code</b></li>
              <li>My favourite pastimes is exploring great <b>Food</b> and sharing the experience on <b>Social Media</b></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;