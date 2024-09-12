import React, { useState } from 'react';
import { BsFiles } from "react-icons/bs";
import { CiMoneyCheck1 } from "react-icons/ci";
import { IoEyeOutline, IoFolderOpenOutline, IoHeadsetOutline, IoWalletOutline } from "react-icons/io5";
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header'; // Importando o Header
import TextLine from '../../components/textLine/textLine';
import Tile from '../../components/tile/tile';

import * as S from './styled'; // Estilo para o layout

const Home = () => {
  const [showAlert, setShowAlert] = useState(true);  // Controla a exibição do alerta
  

  return (
    <div>
      {/* Renderiza o Header no topo da página */}
      <Header />

      {/* Alerta abaixo do Header */}
      {showAlert && (
        <S.Alert>
          <S.AlertText>
            <S.AlertIcon />
            Você possui uma parcela de empréstimo vencida. <br /> Faça o pagamento e fique em dia!
          </S.AlertText>
          <S.CloseButton onClick={() => setShowAlert(false)}>&times;</S.CloseButton>
        </S.Alert>
      )}

      {/* Área principal da página, com espaçamento entre Header e Footer */}
      <S.MainContent>
        <S.CenteredText>
          <TextLine 
            fontFamily="Nunito, sans-serif" 
            fontSize="16px" 
            color="#00000080" 
            fontWeight="500"
          >
            Acesse rapidamente
          </TextLine>
        </S.CenteredText>

        {/* Grid com os Tiles */}
        <S.TileGrid>
          <Tile redirect="/simulador" icon={<BsFiles />} text="Simular Empréstimo" />
          <Tile redirect="/historico" icon={<IoFolderOpenOutline />} text="Histórico de Cotações" />
          <Tile icon={<IoEyeOutline />} text="Meus Empréstimos" />
          <Tile icon={<IoWalletOutline />} text="Minha Carteira" />
          <Tile icon={<IoHeadsetOutline />} text="Suporte e dúvidas" />
          <Tile icon={<CiMoneyCheck1 />} text="Boletos" />
        </S.TileGrid>
      </S.MainContent>

      {/* Renderiza o Footer apenas na página Home */}
      <Footer />
    </div>
  );
};

export default Home;
