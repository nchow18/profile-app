import React from 'react';
import ResumeDownload from '../assets/resume.pdf';
import '../css/Resume.css';

function Resume() {
  

  return (
    <section>
      <div className="page-format">
        <div className="page-content">
          <a href={process.env.PUBLIC_URL + `/resume/Resume-2021.pdf`}>Download Resume</a>
          <img src={process.env.PUBLIC_URL + `/resume/resume-jul2021.JPEG`} alt="resume" />
        </div>
      </div>
    </section>
  )
};

export default Resume;
