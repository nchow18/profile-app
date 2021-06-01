import React from 'react';
import Auth from '../../utils/Auth';

function ProjectDetails(props) {

  const {
    details=[]
  } = props

  const projectId = Auth.getProject()

  const project = details.filter((project) => project.label === projectId);
  console.log(project);

  return (
    <>
      <div className="project-contents">
        <div className="view-project-font">
          PROJECTS
        </div>
        <img alt="proj-img" src={project.img} className="project-picture" />
      </div>
    </>
  )
}

export default ProjectDetails;