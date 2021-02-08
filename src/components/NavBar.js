import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <div style={{ background: '#0c3d59', paddingTop: '12px', paddingBottom: '12px' }}>
      <NavLink to="/" style={link} className="navbar-link">
        Home
      </NavLink>

      <NavLink to="/galleries" style={link} className="navbar-link">
       All Galleries
      </NavLink>

      <NavLink to="/galleries/new" style={link} className="navbar-link">
        New Gallery
      </NavLink>

      <NavLink to="/about" style={link} className="navbar-link">
        About
      </NavLink>
  
          </div>)}

const link = {
    width: '100px',
    padding: '15px',
    margin: '0 8px 8px',
    textDecoration: 'none',
    color: 'white',
  }
  
  export default NavBar;