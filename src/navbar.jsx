import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <div className="nav-links">
        {/* <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#aboutme">About Me</a> */}
        <Link to = '/' className = "link">Home</Link>
        <Link to = "/projects" className = "link">Projects</Link>
        <Link to = "/about" className = "link">About me</Link>
      </div>
    </nav>
    
  );
};

export default Navbar;
