import React, { useState } from 'react';
import InputBox from '../../../components/TextBox/TextBox';
import ButtonAll from '../../../components/button/buttonAll';
import Espaco from '../../../components/space/space';
import TextLine from '../../../components/textLine/textLine';
import * as C from './styled';
import { Link } from 'react-router-dom';

function FormSimular(){
  const [selectedIndex, setSelectedIndex] = useState('');

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const buttonLabels = ['6x', '12x', '18x', '24x', '30x', '36x', '60x', '84x'];

  return(
    <C.FormBody>
      <C.DivOpcoes>
        <Espaco height="30px"/>
        <TextLine 
          fontFamily="Nunito, sans-serif"
          fontWeight="700"
          fontSize="17px"
          color="#000000"
          margin="0px 20px"
        >
          Qual o valor que você deseja <br/>
          solicitar?
        </TextLine>
        
        <Espaco height="20px"/>

        <C.DivInput>
          <InputBox
            border="1px solid #858585"
            width="297px"
            fontFamily="Nunito, sans-serif"
            fontSize="18px"
            padding="13px 10px 13px 10px"
          >
            R$
          </InputBox>
        </C.DivInput>

        <TextLine
          fontFamily="Nunito, sans-serif"
          fontWeight="700"
          fontSize="11px"
          color="#858585"
          justFy="center"
          display="flex"
        >
          O valor pode ser de R$ 150,00 à R$ 100.000,00
        </TextLine>

        <Espaco height="30px"/>

        <TextLine
          fontFamily="Nunito, sans-serif"
          fontWeight="700"
          fontSize="17px"
          color="#000000"
          margin="0px 20px"
        >
          Como você gostaria de parcelar o <br/>
          pagamento?
        </TextLine>

        <Espaco height="20px"/>

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
              fontFamily="Nunito, sans-serif"
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
        <Espaco height="35px"/>
      </C.DivOpcoes>

        <Espaco height="10px"/>
        <Link to="/credito">
      <ButtonAll 
        backgroundColor="#048F44" 
        fontFamily="Nunito, sans-serif" 
        fontSize="17px" 
        fontWeight="900"
      >
        Consultar ofertas
      </ButtonAll>
    </Link>
    </C.FormBody>
    
  )
}

export default FormSimular