import React from 'react';
import './style.css'; 

export default function Navbar() {
  return (
    <header className="header-container">
      {/* Faixa superior com informações úteis de saúde */}
      <div className="header-top-bar">
        <span>📞 Emergência: (71) 0000-0000</span>
        <span>🕒 Atendimento 24h</span>
      </div>

      {/* Barra de Navegação Principal */}
      <nav className="navbar">
        {/* Lado Esquerdo: Logo da Clínica/Hospital */}
        <div className="navbar-logo">
          <span className="logo-icon">➕</span>
          <span className="logo-text">Portal Saúde<span className="text-highlight">Senai</span></span>
        </div>

        {/* Centro: Links de Navegação para as 6 páginas */}
        <ul className="navbar-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#quem-somos">Quem Somos</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#corpo-clinico">Corpo Clínico</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

        {/* Lado Direito: Botão de Destaque */}
        <div className="navbar-cta">
          <button className="btn-agendar">Agendar Consulta</button>
        </div>
      </nav>
    </header>
  );
}