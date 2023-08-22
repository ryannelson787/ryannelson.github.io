import React from "react";

import '../css/Home.css';

import home_content from '../resources/home-content.json';

function Home() {
  return (
    <div>
      <div className="desc-div">
        <p>
          {home_content.home_desc}
        </p>
      </div>
      <div className="home-wrap-div">
        <div className="home-content-div">
          <h1>
            {home_content.title_a}
          </h1>
          <p>
            {home_content.content_a}
          </p>
        </div>
        <div className="home-content-div">
          <h1>
            {home_content.title_b}
          </h1>
          <p>
            {home_content.content_b}
          </p>
        </div>
        <div className="home-content-div">
          <h1>
            {home_content.title_c}
          </h1>
          <p>
            {home_content.content_c}
          </p>
        </div>
      </div>
    </div>
    
  )
}

export default Home;