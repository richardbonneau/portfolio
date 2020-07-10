import React, { useState, useEffect } from "react";
import Project from "./components/project";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaFacebookMessenger } from "react-icons/fa";
import { IoIosArrowDown, IoMdMail, IoLogoYoutube, IoLogoTwitter } from "react-icons/io";
import "./App.css";
import { latestWork, translation } from "./utils/data.js";
import scrollToElement from "scroll-to-element";

function App() {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const [language, setLanguage] = useState("en");

  function navLinkClicked(selection) {
    scrollToElement(`#${selection}`, { ease: "inOutCube" });
    setMenuOpened(false);
  }
  function changeLanguage(event) {
    language === "en" ? setLanguage("fr") : setLanguage("en");
    setMenuOpened(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => (isMenuOpened ? setMenuOpened(false) : null));
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
              {isMenuOpened ? <FaTimes className="hamburger" /> : <FaBars className="hamburger" />}
            </div>

            <ul className={isMenuOpened ? "mobile-menu open" : "mobile-menu"}>
              <li
                onClick={() => {
                  navLinkClicked("work");
                }}
                href="#"
              >
                {translation[language].work}
              </li>
              <li
                onClick={() => {
                  navLinkClicked("contact");
                }}
                href="#"
              >
                Contact
              </li>
              <li href="#" onClick={changeLanguage}>
                {translation[language].language}
              </li>
            </ul>
            <div
              onClick={() => {
                navLinkClicked("work");
              }}
              className="header-link"
            >
              {translation[language].work}
            </div>
            <div
              onClick={() => {
                navLinkClicked("contact");
              }}
              className="header-link"
            >
              Contact
            </div>
            <div className="header-link" onClick={changeLanguage}>
              {translation[language].language}
            </div>
          </div>
        </header>

        <h1 className="main-intro">
          {translation[language].heroTextPartOne}
          <span className="intro-span">{translation[language].heroTextPartTwo}</span>
          {translation[language].heroTextPartThree}
          <span className="intro-span">{translation[language].heroTextPartFour}</span>
        </h1>
        <h1 className="main-intro">
          {" "}
          {translation[language].heroTextPartFive}
          <span className="intro-span">{translation[language].heroTextPartSix}</span>
        </h1>

        <div className="hireme-wrapper">
          <div
            onClick={() => {
              navLinkClicked("work");
            }}
            className="hero-btn"
          >
            {translation[language].explore}
          </div>
        </div>
        <div className="hero-icons">
          <a href="https://www.github.com/richardbonneau" target="_blank">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/richard-bonneau/" target="_blank">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://www.youtube.com/channel/UCf9CaENsQfebsDg85bAjIVw" target="_blank">
            <IoLogoYoutube className="icon" />
          </a>
          <a href="https://twitter.com/iamrubik" target="_blank">
            <IoLogoTwitter className="icon" />
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
      <h2>{translation[language].latestWork}</h2>
      {latestWork.map((project, i) => {
        let flexDirection = "";
        if (i % 2 === 1) flexDirection = "project-container-reversed";
        return <Project project={project} flexDirection={flexDirection} language={language} />;
      })}

      <div className="contact-container">
        <h2 className="contact-subtitle">{translation[language].workingTogether}</h2>
        <div id="contact" />
        <div className="contact-text">{translation[language].letsTalk}</div>
        <div className="contact-buttons-container">
          <a
            className="contact-btn twitter"
            href="https://twitter.com/sixthsoftware"
            target="_blank"
          >
            <IoLogoTwitter className="contact-icons" /> {translation[language].twitter}
          </a>
          <div />
          <a
            className="contact-btn linkedin"
            href="https://www.linkedin.com/in/richard-bonneau/"
            target="_blank"
          >
            <FaLinkedin className="contact-icons" /> {translation[language].linkedIn}
          </a>
          <div />
          <a
            className="contact-btn facebook"
            href="https://www.facebook.com/richard.bonneau.35"
            target="_blank"
          >
            <FaFacebookMessenger className="contact-icons" />
            {translation[language].facebook}
          </a>
          <div />
          <a className="contact-btn email" href="mailto:info@richardbonneau.com" target="_blank">
            {" "}
            <IoMdMail className="contact-icons" /> {translation[language].email}
          </a>
          {/* <form>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="email" />
          <textarea onChange={onChange} />
          <input type="submit" />
        </form> */}
        </div>
        <div className="footer">© Richard Bonneau {new Date().getFullYear()}</div>
      </div>
    </div>
  );
}

export default App;
