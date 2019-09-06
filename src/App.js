import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="hero">
      <header className="App-header">
        
       <div className="main-name">Richard Bonneau</div>
   
    
           <div className="links-wrapper">
          <a className="header-link" href="#">Work</a>
        <a className="header-link" href="#">Contact</a>
        <a className="header-link" href="#">Français</a>
       </div>
       
      </header>
      <h1 className="main-intro">I am a full stack <span className="intro-span">Web Developer</span> living in Montreal, currently working as a <span className="intro-span">Freelancer</span></h1>
      <div className="hireme-wrapper"><button>Hire me</button></div>
      
      <div className="hero-icons">
      <div>LinkedIn </div>
      <div>GitHub </div>
      <div>repl?</div>
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

