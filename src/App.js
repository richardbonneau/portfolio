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
import { latestWork, translation } from "./utils/data.js";
import scrollToElement from "scroll-to-element";

function App() {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const [language, setLanguage] = useState("en")


  function navLinkClicked(selection) {
    scrollToElement(`#${selection}`, { ease: "inOutCube" });
    setMenuOpened(false);
  }
  function changeLanguage(event){
    language === "en" ? setLanguage("fr") : setLanguage("en");
    setMenuOpened(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", () =>
      isMenuOpened ? setMenuOpened(false) : null
    );
    console.log("effect");
  });
  return (
    <div>
<div>
  hello
  hello
</div>
    </div>
  );
}

export default App;
