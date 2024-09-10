import styled from 'styled-components';

// Estilo para o contêiner principal da Home (Main Content)
export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin-top: 0px;  /* Espaçamento abaixo do Header */
  margin-bottom: 80px;  /* Espaçamento acima do Footer */
  min-height: calc(100vh - 160px);  /* Calcula a altura da tela menos o espaço do Header e Footer */
  width: 75%;  /* Largura do conteúdo principal */
`;

// Estilo para o texto "Acesse rapidamente", centralizando-o
export const CenteredText = styled.div`
  display: flex;
  margin: 10px 0;  /* Espaçamento entre o texto e os Tiles */
  width: 100%;  /* Garante que o texto ocupe toda a largura */
`;

// Grid para organizar os Tiles
export const TileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);  /* Duas colunas */
  grid-gap: 32px;  /* Espaçamento entre os Tiles */
  padding: 48px;  /* Espaçamento interno do grid */
  justify-content: center;  /* Centraliza o grid */
  width: 100%;  /* Garante que o grid ocupe toda a largura */
  max-width: 100%;  /* Ajusta a largura máxima para não limitar o grid */
  margin: 0 auto;  /* Centraliza o grid horizontalmente */
`;

// Estilo para o Alerta
export const Alert = styled.div`
  background-color: #F6F6F6;  /* Fundo branco claro com tom de alerta */
  border: 1px solid #F6F6F6;  /* Borda leve com tom de alerta */
  color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: %;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);  /* Sombra leve */
  position: relative;
  z-index: 1000;  /* Ficar acima do conteúdo */
`;

// Estilo para o texto do Alerta
export const AlertText = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  color: #333;

  strong {
    font-weight: bold;
  }
`;

// Ícone circular vermelho
export const AlertIcon = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 50%;
  margin-right: 10px;
  box-shadow: 0px 0px 5px rgba(255, 0, 0, 0.3);
`;

// Botão de fechar o alerta (ícone X)
export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  margin-left: 10px;
  transition: color 0.2s;

  &:hover {
    color: #000;
  }
`;