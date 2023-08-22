import React from "react";

import '../css/AboutMe.css';

import aboutme_content from '../resources/aboutme-content.json';
const ryan_pic = require('../resources/ryan_pic.JPG');
const ryan_pic3 = require('../resources/ryan_pic3.JPG');

function AboutMe() {
  React.useEffect(() => {
    document.title = "Ryan Nelson";
  });

  return (
    <div>
      <div className="desc-div">
        <p>
          {aboutme_content.desc[0]}
        </p>
        <p>
          {aboutme_content.desc[1]}
        </p>
        <p>
          {aboutme_content.desc[2]}
        </p>
        <p>
          {aboutme_content.desc[3]}
        </p>
        <img src={ryan_pic} alt="Ryan Nelson" className="pics"/>
        <img src={ryan_pic3} alt="Ryan Nelson" className="pics"/>
      </div>
    </div>
  )
}

export default AboutMe;