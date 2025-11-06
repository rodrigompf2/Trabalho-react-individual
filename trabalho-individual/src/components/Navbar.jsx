import React from 'react';
import { Link } from 'react-router-dom';
import ZygosLogo from '../assets/logo.png'; 

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="logo-container">
      <img src={ZygosLogo} alt="Logo Zygos" className="logo-img" />
      Zygos
    </Link>
    <div className="nav-links">
      <Link to="/">Início</Link>
      <Link to="/plans">Planos e Salas</Link>
      <Link to="/mybookings">Meus Agendamentos</Link>
    </div>
  </nav>
);

export default Navbar;