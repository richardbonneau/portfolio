import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {IoIosArrowDown} from 'react-icons/io'
import '../App.css';

function Project(props) {
 
  return (
    <div className="App">
        <h4>{props.title}</h4>
        <img src={props.image} className="project-image"/>
    </div>
  );
  
}

export default Project;

