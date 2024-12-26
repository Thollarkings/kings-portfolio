import React from 'react';
import './Header.css'; // Import the CSS for the header

const Header = () => {
  return (
    <header className='header'>
      <div className="logo" />
      <nav>
        <ul className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/summary">Summary</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;