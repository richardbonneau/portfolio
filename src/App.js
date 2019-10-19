import React, { useState, useEffect } from "react";
import Project from "./components/project";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaFacebookMessenger
} from "react-icons/fa";
import { IoIosArrowDown, IoMdMail } from "react-icons/io";
import "./App.css";
import { latestWork } from "./utils/data.js";
import scrollToElement from "scroll-to-element";

function App() {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const [mailName, setMailName] = useState("");
  const [mailEmail, setMailEmail] = useState("");


  function navLinkClicked(selection) {
    scrollToElement(`#${selection}`, { ease: "inOutCube" });
    setMenuOpened(false);
  }
  function onChange(event){
    
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
            <div onClick={() => {
                  navLinkClicked("contact");
                }} className="header-link">Contact</div>
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
          <div
            onClick={() => {
              navLinkClicked("contact")
            }}
            className="hero-btn"
          >
            Hire me
          </div>
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
          <IoIosArrowDown
            onClick={() => {
              navLinkClicked("work");
            }}
            className="see-more"
          />
        </div>
      </div>

      <div id="work" />
      <h2>Latest Work</h2>
      {latestWork.map((project,i) => {
        let flexDirection = ""
      if(i%2===1)flexDirection = "project-container-reversed"
      return <Project project={project} flexDirection={flexDirection} /> })}

      <div className="contact-container">
        <h2 className="contact-subtitle">Interested in working together?</h2>
        <div id="contact" />
        <div className="contact-text">I am open to freelance contracts and remote work. Let's talk!</div>
        <div className="contact-buttons-container">
          <a
            className="contact-btn linkedin"
            href="https://www.linkedin.com/in/richard-bonneau/"
            target="_blank"
          >
            <FaLinkedin className="contact-icons" /> Connect on LinkedIn
          </a>
          <div />
          <a
            className="contact-btn facebook"
            href="https://www.facebook.com/richard.bonneau.35"
            target="_blank"
          >
            <FaFacebookMessenger className="contact-icons" /> Message on Facebook
          </a>
          <div />
          <a
            className="contact-btn email"
            href="mailto:info@richardbonneau.com"
            target="_blank"
          >
            {" "}
            <IoMdMail className="contact-icons" /> Send an Email
          </a>
          <form>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="email" />
            <textarea onChange={onChange} />
            <input type="submit" />
          </form>
        </div>
        <div className="footer">© Richard Bonneau {new Date().getFullYear()}</div>
      </div>
      
    </div>
  );
}

export default App;
