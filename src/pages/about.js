import React from "react";
import "../components/about.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4140/4140051.png"
          alt="Profile"
          className="about-image"
        />
        <div className="about-text">
          <p>
            Hi! I'm <strong>Vishwaathiga</strong>, a passionate Frontend Developer who loves building
            elegant and user-friendly web applications using <strong>React.js</strong>.  
            I enjoy turning ideas into interactive, visually appealing digital experiences.
          </p>
          <p>
            I’m currently exploring <strong>Data analyst</strong> and cloud deployment practices to
            expand my skillset in full-stack development.
          </p>
          <p>
            When I’m not coding, I enjoy learning new design trends, reading tech blogs, and experimenting with creative visuals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

