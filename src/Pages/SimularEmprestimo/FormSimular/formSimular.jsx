import React, { useState } from 'react';
import InputBox from '../../../components/TextBox/TextBox';
import ButtonAll from '../../../components/button/buttonAll';
import TextLine from '../../../components/textLine/textLine';
import * as C from './styled';

function FormSimular(){
  const [selectedIndex, setSelectedIndex] = useState('');

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const buttonLabels = ['6x', '12x', '18x', '24x', '30x', '36x', '60x', '84x'];

  return(
    <C.FormBody>

      <C.DivOpcoes>
        <TextLine>Qual o valor que você deseja solicitar?</TextLine>

        <InputBox>R$</InputBox>

        <TextLine>O valor pode ser de R$ 150,00 à R$ 100.000,00</TextLine>

        <TextLine>Como você gostaria de parcelar o pagamento?</TextLine>

        <C.SectionX>
          {buttonLabels.map((label, index) => (
            <ButtonAll
              key={index}
              backgroundColor="white"
              color="#F6811D"
              width="70px"
              height="50px"
              margin="5px"
              colorSelect="#F6811D"
              border="2px solid #0000000A"
              fontFamily="Nunito"
              fontSize="16px"
              fontWeight="700"
              type="button"
              isSelected={selectedIndex === index}
              onClick={() => handleClick(index)}
            >
              {label}
            </ButtonAll>
          ))}
        </C.SectionX>

      </C.DivOpcoes>

      <ButtonAll 
        backgroundColor="#048F44" 
        fontFamily="Nunito, sans-serif" 
        fontSize="17px" 
        fontWeight="900"
      >
        Consultar ofertas
      </ButtonAll>
   
    </C.FormBody>
    
  )
}

export default FormSimular