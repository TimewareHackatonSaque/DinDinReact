import styled from 'styled-components';

// Estilo do container do Header
export const Header = styled.header`
  background-color: #048f44;
  width: 100%;  /* Agora preenche 100% da largura da tela */
  display: flex;
  flex-direction: column;
  row-gap: 10px;  /* Ajuste o espaço entre os elementos */
  justify-content: space-between;
  padding: 12px 24px;  /* Reduzindo o padding para diminuir a altura */
  align-items: center;
  box-sizing: border-box;  /* Garante que o padding seja incluído na largura */
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const BtnRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #ffffff33;
  border-radius: 8px;
  position: relative;
  width: 50px;  /* Ajuste o tamanho para reduzir a altura */
  height: 36px;  /* Diminuir a altura */
  padding: 0 8px;  /* Diminuir o padding lateral */
`;

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

export const ViewSaldo = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;
