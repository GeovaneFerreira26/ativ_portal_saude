import './style.css'
import React from 'react';

export default function Servicos() {
  const listaServicos = [
    { id: 1, icone: '🩺', titulo: 'Consultas Médicas', desc: 'Atendimento especializado em diversas áreas como Cardiologia, Pediatria e Clínica Geral.' },
    { id: 2, icone: '🧪', titulo: 'Exames Laboratoriais', desc: 'Análises clínicas completas, exames de sangue, urina e rotinas preventivas com agilidade.' },
    { id: 3, icone: '🩻', titulo: 'Radiografia e Imagem', desc: 'Raio-X digital, Ultrassonografia e Tomografia com equipamentos de última geração.' },
    { id: 4, icone: '❤️', titulo: 'Check-up Executivo', desc: 'Avaliações completas e personalizadas para acompanhar de perto a sua saúde e bem-estar.' },
    { id: 5, icone: '🧠', titulo: 'Neurologia', desc: 'Diagnóstico e tratamento de distúrbios do sistema nervoso com corpo clínico experiente.' },
    { id: 6, icone: '👶', titulo: 'Atendimento Pediátrico', desc: 'Cuidado especializado e humanizado para o desenvolvimento saudável dos seus filhos.' }
  ];

  return (
    <div className="servicos-container">
      <section className="servicos-header">
        <h1>Nossos Serviços e Especialidades</h1>
        <p>Oferecemos uma infraestrutura completa e atendimento humanizado para cuidar de você e da sua família.</p>
      </section>

      <section className="servicos-grid">
        {listaServicos.map(servico => (
          <div key={servico.id} className="servico-card">
            <div className="servico-icone">{servico.icone}</div>
            <h3>{servico.titulo}</h3>
            <p>{servico.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}