import { useNavigate } from 'react-router-dom';
import './style.css'
import React from 'react';

export default function Home() {
  const navigate = useNavigate(); // Inicializa a função de navegação do React Router

  return (
    <div className="home-container">
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Bem-vindo ao Portal Saúde Senai</h1>
          <p>Cuidando da sua saúde com modernidade, dedicação e a infraestrutura que você merece.</p>
          {/* 3. Adiciona o evento onClick chamando a rota de serviços */}
          <button className="btn-conhecer" onClick={() => navigate('/servicos')}> 
            Conheça Nossos Serviços
          </button>
        </div>
      </section>
    </div>
  );
}