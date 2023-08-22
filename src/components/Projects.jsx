import React from "react";

import '../css/Projects.css';

import proj_content from '../resources/project-content.json';

function Projects() {
  const proj_div = (proj) => {
    return (
      <div>
        <h1>
          {proj.title}
        </h1>
        <h2>
          {proj.subtitle}
        </h2>
        <h2>
          {proj.timeframe}
        </h2>
        <h2>
          {proj.skills}
        </h2>
        <p>
          {proj.content}
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="desc-div">
        {proj_content.proj_desc}
      </div>
      <div className="proj-content-div">
        {proj_content.projects.map(proj => {
          return proj_div(proj);
        })}
        <h1>
          Future Projects/Interests
        </h1>
        {proj_content.future.map(idea => {
          return <h2>{idea}</h2>
        })}
      </div>
    </div>
  )
}

export default Projects;