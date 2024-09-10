import styled from 'styled-components';

// Estilo do container do Header
export const Header = styled.header`
  background-color: #048f44;
  width: 100%;  /* Preenche 100% da largura da tela */
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: space-between;
  padding: 12px 24px;
  box-sizing: border-box;  /* Inclui o padding na largura total */
`;

// Primeira linha do Header
export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

// Estilo para o wrapper do logo, ajustando o tamanho e a posição
export const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-start;  /* Garante que o logo fique no topo */
  justify-content: flex-start;  /* Garante que fique no canto esquerdo */
  width: 54px;  /* Defina a largura exata do logo */
  height: 57px; /* Defina a altura exata do logo */
  
  img {
    width: 100%;   /* Força a imagem a ocupar o tamanho do wrapper */
    height: 100%;  /* Garante que a imagem se ajuste à altura */
    object-fit: contain;  /* Mantém as proporções da imagem */
    transform: scaleX(-1);  /* Inverte a imagem horizontalmente */
  }
`;

// Botão à direita (para os ícones de usuário e configurações)
export const BtnRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #ffffff33;
  border-radius: 8px;
  position: relative;
  width: 50px;  /* Ajuste o tamanho para reduzir a altura */
  height: 36px;  /* Diminuir a altura */
  padding: 0 8px;
`;

// Wrapper para os ícones
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #006b31;
  border-radius: 50%;
  width: 36px;  /* Diminuir o tamanho do ícone */
  height: 36px;  /* Diminuir o tamanho do ícone */
  margin-right: 12px;
  position: absolute;
  left: -12px;
  z-index: 100;

  &:first-child {
    margin-right: auto;
  }
`;

// Valor do saldo
export const SaldoValue = styled.p`
  color: #fff;
  font-weight: 700;
  font-size: 22px;  /* Diminuir o tamanho da fonte */
  line-height: 28px;  /* Ajuste o espaçamento entre linhas */

  span {
    font-weight: 400;
    font-size: 14px;  /* Diminuir o tamanho do texto */
    line-height: 18px;
  }
`;

// Botão de visualizar/ocultar saldo
export const ViewSaldo = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;
