import React, { useState } from "react";
import Project from "./components/project";
import { FaGithub, FaLinkedin, FaBars, FaClose, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "./App.css";
import { latestWork } from "./utils/data.js";

function App() {
  const [isMenuOpened, setMenuOpened] = useState(false);
  return (
    <div className="App">
      <div className="hero">
        <header className="App-header">
          <div className="main-name">Richard Bonneau</div>
          <div className="links-wrapper">
            <div
              onClick={() => {
                setMenuOpened(!isMenuOpened);
              }}
            >
              {isMenuOpened ? (
                <FaTimes className="hamburger" />
              ) : (
                <FaBars className="hamburger" />
              )}
            </div>

            <ul className={isMenuOpened ? "mobile-menu open" : "mobile-menu"}>
              {/* <ul className="mobile-menu" style={isMenuOpened?{right:"-40px"}:{}}> */}
              <li href="#">Work</li>
              <li href="#">Contact</li>
              <li href="#">Francais</li>
            </ul>
            <div className="header-link">Work</div>
            <div className="header-link">Contact</div>
            <div className="header-link">Français</div>
          </div>
        </header>

        <h1 className="main-intro">
          I am a full stack{" "}
          <span className="intro-span">Web and Mobile Developer</span> living in
          Montreal, currently working as a{" "}
          <span className="intro-span">Freelancer</span>
        </h1>
        <div className="hireme-wrapper">
          <div className="btn">Hire me</div>
        </div>
        <div className="hero-icons">
          <a href="https://www.github.com/richardbonneau" target="_blank"><FaGithub className="icon"  /></a>
          <a href="https://www.linkedin.com/richardbonneau" target="_blank"><FaLinkedin className="icon"  /></a>
        </div>
        <div className="see-more-wrapper">
          <IoIosArrowDown className="see-more" />
        </div>
      </div>

      <h2>Latest Work</h2>
      {latestWork.map(project => (
        <Project title={project.title} image={project.image} />
      ))}

      <h2>Looking to start a project? Let's talk</h2>
      <div>Connect on LinkedIn</div>
      <div>Message on Facebook</div>
      <div>Send an Email</div>
    </div>
  );
}

export default App;
