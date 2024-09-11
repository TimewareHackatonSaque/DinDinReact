import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '../../../components/TextBox/TextBox';
import ButtonAll from '../../../components/button/buttonAll';
import Espaco from '../../../components/space/space';
import TextLine from '../../../components/textLine/textLine';
import * as C from './styled';

function FormSimular(){
  const [valorEmprestimo, setValorEmprestimo] = useState('');
  const [ofertas, setOfertas] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState('');
  const buttonLabels = ['6x', '12x', '18x', '24x', '30x', '36x', '60x', '84x'];
  const navigate = useNavigate();

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const handleInputChange = (e) =>{
    setValorEmprestimo(e.target.value);
  };

  const consultarOfertas = async () => {
    try{
      const response = await fetch('https://apiv2-dev.jurosbaixos.com.br /emprestimos/sem-garantia/simulacao/ultimas',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Bearer': '',
        },
        /*body: JSON.stringify({
          valorEmprestimo: valorEmprestimo,
          parcelas: buttonLabels[selectedIndex],
        }),*/
      });
      if(!response.ok){
        throw new Error('Erro na requisição');
      }

      const data = await response.json();
      setOfertas(data.ofertas);

      navigate('/credito', {state: {ofertas: data.ofertas}})
    }
    catch (err){
      console.error('Erro ao consultar ofertas:', err);
    }
  };

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
            type="string"
            value={valorEmprestimo}
            onChange={handleInputChange}
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
      <ButtonAll 
        backgroundColor="#048F44" 
        fontFamily="Nunito, sans-serif" 
        fontSize="17px" 
        fontWeight="900"
        onClick={consultarOfertas}
      >
        Consultar ofertas
      </ButtonAll>
    </C.FormBody>
    
  )
}

export default FormSimular