import { useState } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuemSomos from './pages/QuemSomos';
import CorpoClinico from './pages/CorpoClinico';
import Blog from './pages/Blog';

export default function App() {



  return (
    <div>
    <Navbar />
    <main>
        <h1>Bem-vindo ao Portal Saúde</h1>
        <p>Aqui entra o conteúdo principal da página inicial...</p>
        
        <QuemSomos />
        <CorpoClinico />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}