import React from 'react';
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#blog">Blog</a>
        <a href="#aboutme">About Me</a>
      </div>
    </nav>
    
  );
};

export default Navbar;
