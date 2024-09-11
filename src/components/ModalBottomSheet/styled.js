import styled from 'styled-components';

// Fundo escuro atrás do modal
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  animation: fade-in 0.3s ease-out;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

// Container do Modal Bottom Sheet
export const BottomSheetContainer = styled.div`
  position: fixed;
  bottom: 0;  /* Alinha o modal no final da tela */
  left: 50%;  /* Centraliza horizontalmente */
  transform: translateX(-50%);  /* Ajusta o deslocamento para centralizar */
  width: 100%;
  max-width: 500px;  /* Limita a largura máxima */
  background-color: white;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  z-index: 1000;
  max-height: 80%;
  overflow-y: auto;
  padding-left: 20px;  /* Adiciona padding nas laterais */
  padding-right: 20px;  /* Adiciona padding nas laterais */

  @media (max-width: 768px) {
    max-width: 100%;  /* Preenche a tela toda em dispositivos menores */
    padding-left: 15px;  /* Ajusta o padding para telas menores */
    padding-right: 15px;  /* Ajusta o padding para telas menores */
    box-sizing: border-box;
  }

  @media (min-width: 769px) {
    bottom: 0;  /* Fixa no final da tela em desktops também */
    transform: translateX(-50%);  /* Centraliza no desktop */
    max-height: 600px;  /* Limita a altura do modal em desktops */
  }

  @keyframes slide-up {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

// Botão de fechar o modal
export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: black;
`;

// Lista de opções de parcelas
export const PaymentOptionList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

// Opção individual de pagamento
export const PaymentOptionItem = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

// Checkbox estilizado (círculo de seleção)
export const PaymentOptionCheckbox = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  border: 2px solid #333;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  display: inline-block;

  &:checked {
    background-color: #ff8c00;
    border-color: #ff8c00;
  }
`;

// Texto de detalhes da parcela
export const PaymentOptionText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;  /* Ajusta o texto para a esquerda em telas menores */
  }
`;

export const PaymentAmount = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const DiscountText = styled.span`
  font-size: 12px;
  color: #00a650;
`;

// Seção de taxas e juros
export const RatesSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const RateItem = styled.div`
  font-size: 12px;
  color: #333;
  text-align: center;

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

// Total final e botão de confirmação
export const TotalAmount = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-top: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;  /* Centraliza o conteúdo horizontalmente */
  margin-top: 20px;         /* Ajuste o espaçamento conforme necessário */
`;