import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

function projectCard(props) {
  console.log("props = ",props);
  console.log("gituhRepo= ",props.githubRepo);
  console.log("applicationLink= ",props.applicationLink) ;
  return (
    <div className="card">
      <div className="img-container">
      <a target="_blank" rel="noopener noreferrer" href={props.link}><img alt={props.name} src={props.image} /></a>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Github repo:</strong> {props.repo}
          </li>
          <li>
            <strong>Application:</strong> {props.link}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default projectCard;
