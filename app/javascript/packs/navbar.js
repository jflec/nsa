import React from 'react';
import ReactDOM from 'react-dom';

const Navbar = () => {
  return (
    <div id="navbar-container">
      <h1>Night Shift Arcade</h1>
      <ul id="nav-menu">
        <li className="nav-menu-item">Sign Up</li>
        <li className="nav-menu-item">Sign In</li>
      </ul>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Navbar />,
    document.body.appendChild(document.getElementById('root'))
  );
});
