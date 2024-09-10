import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home/home';
import Simulador from './Pages/SimularEmprestimo/Simulador';
import Footer from './components/footer/footer';
import Credito from './Pages/Credito/Credito';  // Importando a página Crédito
import Login from './Pages/login/login';  // Importando a página Login
import Cadastro from './Pages/Cadastro/Cadastro';  // Importando a página Cadastro

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

// Função Layout responsável por renderizar o Footer apenas na Home
function Layout() {
  const location = useLocation(Home);  // Captura a rota atual

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/simulador" element={<Simulador />} />
        <Route path="/credito" element={<Credito />} />  {/* Definindo a rota para a página Crédito */}  
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>

      {/* Renderiza o Footer apenas se estiver na página Home */}
      {location.pathname === '/home' && <Footer />}
    </div>
  );
}

export default App;
