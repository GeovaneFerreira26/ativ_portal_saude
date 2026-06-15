import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './style.css';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <div className="header-top-bar">
        <span>📞 Emergência: (71) 0000-0000</span>
        <span>🕒 Atendimento 24h</span>
      </div>

      <nav className="navbar">
        {/* Lado Esquerdo: Logo */}
        <div className="navbar-logo">
          <span className="logo-icon">➕</span>
          <span className="logo-text">Portal<span className="text-highlight">SaúdeSenai</span></span>
        </div>

        {/* Lado Direito: Agrupa os links e o botão juntos na ponta direita */}
        <div className="navbar-right-side">
          <ul className="navbar-links">
            <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/quem-somos" className={({ isActive }) => isActive ? "active" : ""}>Quem Somos</NavLink></li>
            <li><NavLink to="/servicos" className={({ isActive }) => isActive ? "active" : ""}>Serviços</NavLink></li>
            <li><NavLink to="/corpo-clinico" className={({ isActive }) => isActive ? "active" : ""}>Corpo Clínico</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>Blog</NavLink></li>
            <li><NavLink to="/contato" className={({ isActive }) => isActive ? "active" : ""}>Contato</NavLink></li>
          </ul>

          <div className="navbar-cta">
            <button className="btn-agendar" onClick={() => navigate('/contato')}>
              Agendar Consulta
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}