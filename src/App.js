import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="main-logo" src="https://image.shutterstock.com/image-vector/r-logo-initial-letter-design-260nw-780839596.jpg" />
       <div className="links-wrapper">
       <a className="header-link" href="#">Work</a>
        <a className="header-link" href="#">Contact</a>
       </div>
      </header>
      <h1 className="main-intro">I'm Richard Bonneau, a full stack <span className="intro-span">Web Developer</span> living in Montreal, currently working as a <span className="intro-span">freelancer</span></h1>
    <h2>Featured Work</h2>
    <h2>Additional Work</h2>
    <h2>Looking to start a project? Let's talk</h2>
    </div>
  );
}

export default App;
