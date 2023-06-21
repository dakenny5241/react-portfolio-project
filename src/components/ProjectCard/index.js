import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function projectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Github repo:</strong> {props.githubRepo}
          </li>
          <li>
            <strong>Application:</strong> {props.applicationlink}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeproject(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default projectCard;
