import React, { useState, useEffect } from "react";
import Project from "./components/project";
import { FaGithub, FaLinkedin, FaBars, FaClose, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "./App.css";
import { latestWork } from "./utils/data.js";
import scrollToElement from "scroll-to-element";

function App() {
  const [isMenuOpened, setMenuOpened] = useState(false);

  function navLinkClicked(selection) {
    scrollToElement(`#${selection}`,{ease:'inOutCube'});
    setMenuOpened(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", () =>
      isMenuOpened ? setMenuOpened(false) : null
    );
    console.log("effect");
  });
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
              
              <li
                onClick={() => {
                  navLinkClicked("work");
                }}
                href="#"
              >
                Work
              </li>
              <li
                onClick={() => {
                  navLinkClicked("contact");
                }}
                href="#"
              >
                Contact
              </li>
              <li href="#">Francais</li>
            </ul>
            <div
              onClick={() => {
                navLinkClicked("work");
              }}
              className="header-link"
            >
              Work
            </div>
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
          <div  onClick={() => {
            setTimeout(()=>navLinkClicked("contact"),200)
                  
                }} className="btn">Hire me</div>
        </div>
        <div className="hero-icons">
          <a href="https://www.github.com/richardbonneau" target="_blank">
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/richard-bonneau/"
            target="_blank"
          >
            <FaLinkedin className="icon" />
          </a>
        </div>
        <div className="see-more-wrapper">
          <IoIosArrowDown onClick={() => {
                  navLinkClicked("work");
                }} className="see-more" />
        </div>
      </div>

      <div id="work" />
      <h2>Latest Work</h2>
      {latestWork.map(project => (
        <Project project={project} />
      ))}
      <div id="contact" />
      <h2>Looking to start a project? Let's talk</h2>
      <div>Connect on LinkedIn</div>
      <div>Message on Facebook</div>
      <div>Send an Email</div>
    </div>
  );
}

export default App;
