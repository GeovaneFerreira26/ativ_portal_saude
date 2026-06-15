import { useState } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuemSomos from './pages/QuemSomos';
import CorpoClinico from './pages/CorpoClinico';
import Blog from './pages/Blog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Servicos />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/corpo-clinico" element={<CorpoClinico />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>       
  )
}