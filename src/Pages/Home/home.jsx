import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';  // Importando o Header

const Home = () => {
  return (
    <div>
      {/* Renderiza o Header no topo da página */}
      <Header />

      <h1>Bem-vindo à Home</h1>
      <p>Esta é a página home.</p>

      {/* Renderiza o Footer apenas na página Home */}
      <Footer />
    </div>
  );
};

export default Home;
