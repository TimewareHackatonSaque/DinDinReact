import React from 'react';
import * as S from './styled';  // Importa os estilos ajustados
import ButtonAll from '../button/buttonAll';
import TextLine from '../textLine/textLine';

const ModalBottomSheet = ({ onClose, isOpen }) => {
  if (!isOpen) return null;  // Não exibe o modal se não estiver aberto

  return (
    <>
      <S.Backdrop onClick={onClose} /> {/* Fecha o modal ao clicar fora */}
      <S.BottomSheetContainer>
        <S.CloseButton onClick={onClose}>✖</S.CloseButton>

        {/* Título */}
        <TextLine
            fontWeight="bold"
            fontSize="20px"
            color="#333"
            fontFamily="Nunito, sans-serif"
            justFy="center"
            display="flex"
        >Plano de Pagamento Mensal
        </TextLine>

        {/* Opções de parcelas */}
        <S.PaymentOptionList>
          <S.PaymentOptionItem>
            <S.PaymentOptionCheckbox name="plan" defaultChecked/>
            <S.PaymentOptionText>
              <S.PaymentAmount>12x R$235,30</S.PaymentAmount>
              <S.DiscountText>R$70,00 de desconto</S.DiscountText>
            </S.PaymentOptionText>
          </S.PaymentOptionItem>

          <S.PaymentOptionItem>
            <S.PaymentOptionCheckbox name="plan" />
            <S.PaymentOptionText>
              <S.PaymentAmount>9x R$282,31</S.PaymentAmount>
              <S.DiscountText>R$70,00 de desconto</S.DiscountText>
            </S.PaymentOptionText>
          </S.PaymentOptionItem>

          <S.PaymentOptionItem>
            <S.PaymentOptionCheckbox name="plan" />
            <S.PaymentOptionText>
              <S.PaymentAmount>6x R$379,12</S.PaymentAmount>
              <S.DiscountText>R$70,00 de desconto</S.DiscountText>
            </S.PaymentOptionText>
          </S.PaymentOptionItem>

          <S.PaymentOptionItem>
            <S.PaymentOptionCheckbox name="plan" />
            <S.PaymentOptionText>
              <S.PaymentAmount>3x R$675,50</S.PaymentAmount>
              <S.DiscountText>R$70,00 de desconto</S.DiscountText>
            </S.PaymentOptionText>
          </S.PaymentOptionItem>
        </S.PaymentOptionList>

        {/* Seção de taxas */}
        <S.RatesSection>
          <S.RateItem>
            <span>6.86%</span>
            Taxa de juros mensal
          </S.RateItem>
          <S.RateItem>
            <span>121.65%</span>
            Taxa de juros anual
          </S.RateItem>
        </S.RatesSection>

        {/* Valor total */}
        <S.TotalAmount>R$2.204,72 Valor total de pagamento</S.TotalAmount>

        {/* Botão de confirmação */}
        <S.ButtonContainer>
          <ButtonAll 
            fontFamily="Nunito, sans-serif"
            fontSize="13px"
            fontWeight="900"
            width="290px"
            height="43px"
            backgroundColor="#ff8c00"
            onClick={onClose}
            style={{ margin: '0 auto' }}
          >
          Confirmar
          </ButtonAll>
        </S.ButtonContainer>

      </S.BottomSheetContainer>
    </>
  );
};

export default ModalBottomSheet;
