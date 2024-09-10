import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home/home';
import Simulador from './Pages/SimularEmprestimo/Simulador';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

// Função Layout responsável por renderizar o Footer apenas na Home
function Layout() {
  const location = useLocation();  // Captura a rota atual

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulador" element={<Simulador />} />
      </Routes>

      {/* Renderiza o Footer apenas se estiver na página Home */}
      {location.pathname === '/' && <Footer />}
    </div>
  );
}

export default App;
