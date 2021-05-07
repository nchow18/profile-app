import React from 'react';
import ResumeDownload from '../../assets/resume.pdf';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify-icons/logos/github-icon';
import linkedinIcon from '@iconify-icons/logos/linkedin-icon';


function Resume() {
  

  return (
    <section id="resume">
      <h1>Resume</h1>
      <span>Developers Social Media</span>
      <a href="https://github.com/nchow18"><Icon icon={githubIcon} width="150" height="150"/></a>
      <a href="https://www.linkedin.com/in/nathan-chow-1999701b9/"><Icon icon={linkedinIcon} width="150" height="150"/></a>
      <a className="resume-download" href={ResumeDownload} download>
        <span>RESUME DOWNLOAD</span>
      </a>
      <span>Proficiencies:</span>
      <ol>
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

      </ol>
    </section>
  );
};

export default Resume;
