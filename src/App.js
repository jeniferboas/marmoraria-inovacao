import React from 'react';
import './App.css';
import logo from './assets/logo.png'; // Verifique se o nome é 'logo.png'
import heroImage from './assets/hero-background.png'; // Verifique se o nome é 'hero-background.png'

// Componente do Menu de Navegação
function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar-menu">
        <ul className="Navbar-links">
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#galeria">Galeria</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
        {/* O BOTÃO "SOLICITE UM ORÇAMENTO" FOI REMOVIDO DAQUI.
        */}
      </div>
    </nav>
  );
}

// Componente da Seção "Hero"
function Hero() {
  return (
    <section 
      className="Hero" 
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="Hero-logo-container">
        <img src={logo} alt="Logo Marmoraria Inovação" className="Hero-logo" />
      </div>

      <div className="Hero-content">
        <h1>Elegância que Perdura</h1>
        <p>Mármores e Granitos de Alta Qualidade</p>
      </div>
    </section>
  );
}

// Componente da Seção "Serviços"
function Servicos() {
  return (
    <section id="servicos" className="Section Section-gray">
      <h2>Serviços</h2>
      <ul>
        <li>Instalação de bancadas</li>
        <li>Revestimentos em mármore e granito</li>
        <li>Manutenção e polimento</li>
      </ul>
    </section>
  );
}

// Componente da Seção "Galeria"
function Galeria() {
  return (
    <section id="galeria" className="Section">
      <h2>Galeria</h2>
      <p>Aqui você poderá colocar fotos dos seus trabalhos.</p>
    </section>
  );
}

// Componente da Seção "Contato"
function Contato() {
  return (
    <section id="contato" className="Section Section-gray">
      <h2>Contato</h2>
      <p>Entre em contato para um orçamento.</p>
    </section>
  );
}

// App Principal
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Servicos />
      <Galeria />
      <Contato />
    </div>
  );
}

export default App;





