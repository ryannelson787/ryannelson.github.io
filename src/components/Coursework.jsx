import React from "react";

import '../css/Coursework.css';

import cw_content from '../resources/coursework-content.json';

function Coursework() {
  // figure out mobile 1 column stuff

  const courses1 = cw_content.courses.filter((course, index) => index % 3 === 0);
  const courses2 = cw_content.courses.filter((course, index) => index % 3 === 1);
  const courses3 = cw_content.courses.filter((course, index) => index % 3 === 2);

  const course_div = (course) => {
    return (
      <div key={course.id}>
        <h1>
          {course.title}
        </h1>
        <h2>
          {course.desc}
        </h2>
        <h2>
          Grade: {course.grade}
        </h2>
        <p>
          {course.content}
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="desc-div">
        <p>
          {cw_content.cw_desc}
        </p>
      </div>
      <div>
        <div className="cw-content-div">
          {courses1.map((course) => {
            return course_div(course);
          })}
        </div>
        <div className="cw-content-div">
          {courses2.map((course) => {
            return course_div(course);
          })}
        </div>
        <div className="cw-content-div">
          {courses3.map((course) => {
            return course_div(course);
          })}
        </div>
        <div className="cw-content-div mobile">
          {cw_content.courses.map((course) => {
            return course_div(course);
          })}
        </div>
      </div>
    </div>
    
  )
}

export default Coursework;