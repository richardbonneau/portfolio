import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {IoIosArrowDown} from 'react-icons/io'
import '../App.css';

function Project(props) {
 
  return (
    <div className="projects-container">
        
        <img src={props.project.image} className="project-image"/>
        <div className="project-container">
          <h3>{props.project.title}</h3>
      
        <div>{props.project.description}</div>
        <ul className="features-ul">{props.project.features.map(feat=><li>{feat}</li>)}</ul>
        </div>
        

    </div>
  );
  
}

export default Project;

