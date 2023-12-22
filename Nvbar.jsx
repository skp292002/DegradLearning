import React from 'react'
import { NavLink } from 'react-router-dom';

const Nvbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"> <strong className='Degrad'>Degrad</strong></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/quiz">Quizes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
      
    </>
  );
};

export default Nvbar