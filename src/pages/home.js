import React from "react";
import "../components/home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="home-content">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4140/4140051.png"
          alt="Profile"
          className="profile-pic"
        />
        <h1>Hello, I'm <span className="highlight">Vishwaathiga</span></h1>

        <h2>Software Developer | Tech Enthusiast </h2>
        <p>
          I build clean, responsive, and user-friendly web applications using React.
        </p>
        <div className="home-buttons">
          <button className="btn-primary" onClick={() => navigate("/projects")}>
            View Projects
          </button>
          <button className="btn-secondary" onClick={() => navigate("/contact")}>
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;


