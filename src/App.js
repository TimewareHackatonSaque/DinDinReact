import React from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Footer from './components/footer/footer';
import Cadastro from './Pages/Cadastro/Cadastro'; // Importando a página Cadastro
import Credito from './Pages/Credito/Credito'; // Importando a página Crédito
import Home from './Pages/Home/home';
import Login from './Pages/login/login'; // Importando a página Login
import Perfil from './Pages/Perfil/perfil';
import Simulador from './Pages/SimularEmprestimo/Simulador';

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
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/simulador" element={<Simulador />} />
        <Route path="/credito" element={<Credito />} />  
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>

      {/* Renderiza o Footer apenas se estiver na página Home */}
      {location.pathname === '/home' && <Footer />}
    </div>
  );
}

export default App;
