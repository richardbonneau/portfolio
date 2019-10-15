import React from 'react';
import { FaCode, FaDiceD6 } from 'react-icons/fa';
import '../App.css';

function Project(props) {
 console.log("props",)
  return (
    <div className={`project-container ${props.flexDirection}`} style={{flexDirection:props.flexDirection}}>
        
        <img src={props.project.image} className="project-image"/>
        <div className="project-details">
          <h3>{props.project.title}</h3>
      
        <div>{props.project.description}</div>
        <ul className="features-ul">{props.project.features.map(feat=><li>{feat}</li>)}</ul>
        </div>
        <div className="reference-btns-container">
          {props.project.projectUrl
          ?<a className="reference-btn" href={props.project.projectUrl} target="_blank"><FaDiceD6 className="contact-icons" /> Link to project</a>
          :<a className="reference-btn reference-btn-not-available"><FaDiceD6 className="contact-icons" /> Not publicly available</a>
          }
                   {props.project.projectUrl
          ?<a className="reference-btn" href={props.project.codeUrl} target="_blank"><FaCode className="contact-icons" /> Link to code</a>
          :<a className="reference-btn reference-btn-not-available"><FaCode className="contact-icons" /> Not publicly available</a>
          }
          
        </div>
        

    </div>
  );
  
}

export default Project;

