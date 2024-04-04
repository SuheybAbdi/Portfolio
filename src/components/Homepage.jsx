import React from "react";
import "../global.css";
import './Bio.jsx';

function Homepage () {
    return (
      <div id="Home" className="header">
        <header className="head">
        <div className="logo">Bishar's<span>Portfolio</span></div>
          <nav>
              <a href="#Home">Home</a>
              <a href="#Bio">Bio</a>
              <a href="#Skills">Skills</a>
              <a href="#Projects">Projects</a>
              <a href="#Contact">Contact</a>
           
          </nav>
        </header> 
      </div>
      );
    }
export default Homepage