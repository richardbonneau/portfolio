import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './App.css';

function App() {
 
  return (
    <div className="App">
      <div className="hero">
      <header className="App-header">
        
       <div className="main-name">Richard Bonneau</div>
   
    
           <div className="links-wrapper">
          <div className="header-link">Work</div>
        <div className="header-link">Contact</div>
        <div className="header-link">Français</div>
       </div>
       
      </header>
      <h1 className="main-intro">I am a full stack <span className="intro-span">Web Developer</span> living in Montreal, currently working as a <span className="intro-span">Freelancer</span></h1>
      <div className="hireme-wrapper"><div className="btn">Hire me</div></div>
      
      <div className="hero-icons">
        
        <FaGithub className="icon" />
        <FaLinkedin  className="icon" />

      </div>
      
      </div>
    <h2>Latest Work</h2>
    <h2>Looking to start a project? Let's talk</h2>
    <div>Connect on LinkedIn</div>
    <div>Message on Facebook</div>
    <div>Send an Email</div>
    </div>
  );
  
}

export default App;

