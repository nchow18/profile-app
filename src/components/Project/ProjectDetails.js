import React from 'react';

function ProjectDetails(props) {

  const {
    currentProject,
  } = props

  const details = currentProject;

  return (
    <>
      <div className="project-contents">

          <div className="view-project-font">
            <div className="icons-row">
              <span>PROJECTS</span>
              <label for="project-info"><i class="fas fa-info-circle project-info-button"></i></label>
            </div>
        </div>
        <input type="checkbox" id="project-info" />
        <div className="project-row">
          <img alt="proj-img" src={details.img} className="project-picture" />
        </div>
        <div className="project-details">
            <p>{details.name}</p>
            <div className="icons-row">
              <a href={details.github}><i className="fab fa-github project-link-icon"></i></a>
              <a href={details.link}><i className="far fa-window-maximize project-link-icon"></i></a>
            </div>
            <p>{details.details}</p>
          </div>
      </div>
    </>
  )
}

export default ProjectDetails;