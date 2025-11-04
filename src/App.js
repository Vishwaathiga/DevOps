import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/project";
import Contact from "./pages/contact";
import Admin from "./pages/admin";
import "./components/Navbar.css";
import AdminLogin from "./pages/adminLogin";
import AdminPanel from "./pages/adminPanel";
import "./components/adminPanel.css"


;


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-panel" element={<AdminPanel />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
