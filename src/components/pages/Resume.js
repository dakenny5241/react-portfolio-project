import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./resume.css";
export default function Resume() {
  return (
    <div>
      <section id="resume">
          <h2>Resume</h2>
          <a href="resume-url">Download Resume</a>
          <h3>Frontend Proficiencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
    
          </ul>
          <h3>Backend Proficiencies</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MYSQL</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
          </ul>
        </section>
        <footer>
        <h2>Contact Me</h2>

<div className="footer"> 
        <a href="https://www.linkedin.com/in/nkem-okoro-8677b4207" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <br/>
        <a href="https://twitter.com/dakenny5241" target="_blank" rel="noopener noreferrer">Twitter</a>
        <br/>
        <a href="https://github.com/dakenny5241" target="_blank" rel="noopener noreferrer">GitHub</a>

        <p>If you would like to get in touch with me, please feel free to email me at <a href="mailto:dakenny5241@gmail.com">dakenny5241@gmail.com</a>.</p>
        </div>
      </footer>
    </div>
  );
};