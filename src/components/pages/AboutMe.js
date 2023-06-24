import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
let kennyPic = "/assets/images/IMG_Kenny.jpg";

export default function AboutMe() {
  return (
    <div>
      <h1>AboutMe Page</h1>
      <img src={process.env.PUBLIC_URL + kennyPic} className=" float-left myPic" alt="Kenny Okoro" />

      <p>
      My name is Nkem Okoro and I am a web developer. I have been working in the web development field for the past 5 months and have a passion for creating beautiful and functional websites. I am looking for a part-time or full-time position where I can continue to grow my skills and contribute to the success of the company
      </p>
    </div>
  );
}
