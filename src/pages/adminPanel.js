import React from "react";
import "../components/adminPanel.css";

function AdminPanel() {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Projects</li>
          <li>Messages</li>
          <li>Settings</li>
        </ul>
        <button className="logout-btn">Log Out</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome, Admin 👋</h1>
        <p>Here’s an overview of your portfolio activity.</p>

        <div className="stats">
          <div className="card">
            <h3>Projects</h3>
            <p>3</p>
          </div>
          <div className="card">
            <h3>Profile Views</h3>
            <p>120+</p>
          </div>
          <div className="card">
            <h3>Messages</h3>
            <p>8</p>
          </div>
          <div className="card">
            <h3>Updates</h3>
            <p>2 Pending</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
