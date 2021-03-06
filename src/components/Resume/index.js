import React from 'react';
import ResumeDownload from '../../assets/resume.pdf';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify-icons/logos/github-icon';
import linkedinIcon from '@iconify-icons/logos/linkedin-icon';


function Resume() {
  

  return (
    <section id="resume">
      <div id="background-img"></div>
      <div className="center-vh">
        <div className="center-page">
          <div className="center-flex">
          </div>

          <a className="resume-download" href={ResumeDownload} download>
            <span className="resume-font">RESUME DOWNLOAD</span>
          </a>
          <div className="resume-list">
          <span>Proficiencies:</span>
            <ul>
              <li>CSS</li>
              <li>Javascript</li>
              <li>MongoDB</li>
              <li>IndexDB</li>
              <li>Database</li>
              <li>React</li>
              <li>NoSQL</li>
              <li>PWA - Progressive Web Application</li>
              <li>MVC - Model-View-Controller</li>
              <li>ORM - Object Relational Mapping</li>
              <li>SQL</li>
              <li>Express.js</li>
              <li>Web API</li>
            </ul>
          </div>
        </div>

      </div>
      <div id="pop-background"></div>  

    </section>
  );
};

export default Resume;
