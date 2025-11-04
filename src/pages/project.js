import React, { useState } from "react";
import "../components/projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      title: "Task Manager (HTML, CSS, JS)",
      description:
        "Developed a task manager to add, edit, delete, and mark tasks as complete. Improved task organization and prioritization for better productivity.",
      details:
        "This project was built using HTML, CSS, and JavaScript. It allows users to manage daily tasks with features like adding, editing, and deleting tasks. Tasks are stored locally using LocalStorage, ensuring persistence across sessions.",
    },
    {
      title: "Student Information Management (React.js)",
      description:
        "Built a React-based platform to store and view student details with an easy-to-use interface, improving data accessibility and efficiency.",
      details:
        "A React CRUD app that lets users add, edit, view, and delete student records. It uses React Router for navigation and validation for accurate data entry.",
    },
    {
      title: "Alumni Database Management (PHP, XAMPP)",
      description:
        "Designed a system to store, update, and organize alumni information. Enabled event invites and collaboration between alumni and the institution.",
      details:
        "Developed using PHP and MySQL (via XAMPP). This project manages alumni data, event registrations, and communication between alumni and administrators.",
    },
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button
              onClick={() => setSelectedProject(project)}
              className="view-btn"
            >
              View Project
            </button>
          </div>
        ))}
      </div>

      {/* Modal popup section */}
      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
          >
            <span
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
