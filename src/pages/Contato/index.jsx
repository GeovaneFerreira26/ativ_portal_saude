import './style.css'
import React, { useState } from 'react';


export default function Contato() {
  // Estado para controlar o formulário
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado pelo contato, ${formData.nome}! Sua mensagem foi simulada com sucesso.`);
    setFormData({ nome: '', email: '', mensagem: '' }); // Limpa o formulário
  };

  return (
    <div className="contato-container">
      <section className="contato-header">
        <h1>Fale Conosco</h1>
        <p>Tem alguma dúvida, sugestão ou precisa de informações? Entre em contato conosco.</p>
      </section>

      <div className="contato-conteudo">
        {/* Lado Esquerdo: Informações Institucionais */}
        <div className="contato-info">
          <h2>Canais de Atendimento</h2>
          
          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <h3>Endereço</h3>
              <p>Av. Dendezeiros do Bonfim, 99, Salvador - BA</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <h3>Telefone</h3>
              <p>(71) 0000-0000 / (71) 0000-0000</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">✉️</span>
            <div>
              <h3>E-mail</h3>
              <p>contato@saudesenai.com.br</p>
            </div>
          </div>
        </div>

        {/* Lado Direito: Formulário de Mensagem */}
        <div className="contato-formulario">
          <h2>Envie uma Mensagem</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome Completo</label>
              <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required placeholder="Digite seu nome" />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Digite seu e-mail" />
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange} required rows="5" placeholder="Como podemos ajudar você?"></textarea>
            </div>

            <button type="submit" className="btn-enviar">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </div>
  );
}