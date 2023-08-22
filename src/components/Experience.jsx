import React from "react";

import '../css/Experience.css';

import exp_content from '../resources/experience-content.json';

function Experience() {
  const exp_div = (exp) => {
    return (
      <div>
        <h1>
          {exp.title}
        </h1>
        <h2>
          {exp.company}
        </h2>
        <h2>
          {exp.location}
        </h2>
        <h2>
          {exp.duration}
        </h2>
        <p>
          {exp.content}
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="desc-div">
        <p>
          {exp_content.exp_desc_1}
        </p>
        <p>
          {exp_content.exp_desc_2}
        </p>
      </div>
      <div className="exp-content-div">
        {exp_content.experience.map(exp => {
          return exp_div(exp);
        })}
      </div>
    </div>
    
  )
}

export default Experience;