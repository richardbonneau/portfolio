import React from "react";
import { FaCode, FaDiceD6 } from "react-icons/fa";
import { translation } from "../utils/data.js";
import "../App.css";

function Project(props) {
  console.log("props");
  function renderFeatures(){
    let features = props.project.features;
    if(features.length!==undefined) return features.map(feat => (<li>{feat}</li>))
    else return features[props.language].map(feat => (<li>{feat}</li>))
   
  }
  return (
    <div
      className={`project-container ${props.flexDirection}`}
      style={{ flexDirection: props.flexDirection }}
    >
      <img src={props.project.image} className="project-image" />
      <div className="project-details">
        <h3>{props.project.title}</h3>
        <div>
          <div>{props.project.description[props.language]}</div>
          <ul className="features-ul">
            {renderFeatures()}
          </ul>
        </div>
        <div className="reference-btns-container">
          {props.project.projectUrl ? (
            <a
              className="reference-btn"
              href={props.project.projectUrl}
              target="_blank"
            >
              <FaDiceD6 className="contact-icons" /> {translation[props.language].linkProject}
            </a>
          ) : (
            <a className="reference-btn reference-btn-not-available">
              <FaDiceD6 className="contact-icons" /> {translation[props.language].notAvailable}
            </a>
          )}
          {props.project.projectUrl ? (
            <a
              className="reference-btn"
              href={props.project.codeUrl}
              target="_blank"
            >
              <FaCode className="contact-icons" /> {translation[props.language].linkCode}
            </a>
          ) : (
            <a className="reference-btn reference-btn-not-available">
              <FaCode className="contact-icons" /> {translation[props.language].notAvailable}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
