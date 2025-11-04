import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../components/admin.css";

function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
    const navigate = useNavigate();



  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            <h1>Welcome, Admin 👋</h1>
            <p>Here’s an overview of your portfolio activity.</p>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Projects</h3>
                <p>3</p>
              </div>
              <div className="stat-card">
                <h3>Profile Views</h3>
                <p>120+</p>
              </div>
              <div className="stat-card">
                <h3>Messages</h3>
                <p>8</p>
              </div>
              <div className="stat-card">
                <h3>Updates</h3>
                <p>2 Pending</p>
              </div>
            </div>
          </>
        );

      case "projects":
        return (
          <>
            <h1>Projects Overview</h1>
            <ul className="project-list">
              <li>Task Manager (HTML, CSS, JS)</li>
              <li>Student Information Management (React.js)</li>
              <li>Alumni Database Management (PHP, XAMPP)</li>
            </ul>
          </>
        );

      case "messages":
        return (
          <>
            <h1>Messages</h1>
            <p>No new messages yet.</p>
          </>
        );

      case "settings":
  return (
    <>
      <h1>Settings ⚙️</h1>
      <p>Change your admin credentials below.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          localStorage.setItem("adminUsername", newUsername);
          localStorage.setItem("adminPassword", newPassword);
          alert("Credentials updated successfully!");
          setNewUsername("");
          setNewPassword("");
        }}
        className="settings-form"
      >
        <label>New Username</label>
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          placeholder="Enter new username"
        />

        <label>New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
        />

        <button type="submit">Update</button>
      </form>
    </>
  );


      default:
        return <p>Select an option from the sidebar.</p>;
    }
  };

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li
            className={activeTab === "dashboard" ? "active" : ""}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </li>
          <li
            className={activeTab === "projects" ? "active" : ""}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </li>
          <li
            className={activeTab === "messages" ? "active" : ""}
            onClick={() => setActiveTab("messages")}
          >
            Messages
          </li>
          <li
            className={activeTab === "settings" ? "active" : ""}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </li>
        </ul>
        <button
  className="logout-btn"
  onClick={() => {
    localStorage.removeItem("isLoggedIn");
    navigate("/admin-login");
  }}
>
  Log Out
</button>
      </aside>
       

      <main className="admin-content">{renderContent()}</main>
    </div>
  );
}

export default Admin;
