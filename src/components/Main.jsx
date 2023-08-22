import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';

import '../css/Main.css';

import Tab from "./Tab";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";
import Coursework from "./Coursework";
import Resume from "./Resume";
import Contact from "./Contact";

function Main() {
  // const [pageName, setPageName] = React.useState("Home");

  const navigate = useNavigate();

  const goToTab = (newPageName) => {
    // setPageName(newPageName);
    if (newPageName === "Home") {
      navigate("/");
    } else if (newPageName === "Relevant Projects") {
      navigate("/projects");
    } else if (newPageName === "Academic Coursework") {
      navigate("/coursework");
    } else if (newPageName === "Work Experience") {
      navigate("/experience");
    } else if (newPageName === "About Me") {
      navigate("/about");
    } else if (newPageName === "Resume") {
      navigate("/resume");
    } else if (newPageName === "Contact Info") {
      navigate("/contact");
    }
  }

  React.useEffect(() => {
    document.title = "Ryan Nelson";
  });

  return (
    <div className="Main">
      <div className="Main-title">
          <h1>
            Ryan Nelson
          </h1>   
        </div>
      <div className="Main-main">
        <div className="tab-div">
          <Tab name="Home" goToTab={goToTab}/>
          <Tab name="Relevant Projects" goToTab={goToTab}/>
          <Tab name="Academic Coursework" goToTab={goToTab}/>
          <Tab name="Work Experience" goToTab={goToTab}/>
          <Tab name="About Me" goToTab={goToTab}/>
          <Tab name="Resume" goToTab={goToTab}/>
          <Tab name="Contact Info" goToTab={goToTab}/>
        </div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/experience" element={<Experience/>}/>
          <Route exact path="/coursework" element={<Coursework/>}/>
          <Route exact path="/about" element={<AboutMe/>}/>
          <Route exact path="/resume" element={<Resume/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
        <div className="Main-bottom">
        </div>
      </div>
    </div>
  )
}

export default Main;