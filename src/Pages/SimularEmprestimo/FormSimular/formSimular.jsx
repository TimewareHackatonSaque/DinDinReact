import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '../../../components/TextBox/TextBox';
import ButtonAll from '../../../components/button/buttonAll';
import Espaco from '../../../components/space/space';
import TextLine from '../../../components/textLine/textLine';
import * as C from './styled';

function FormSimular() {
  const [error, setError] = useState('');
  const [valorEmprestimo, setValorEmprestimo] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const buttonLabels = [6, 12, 18, 24, 30, 36, 60, 84];
  const navigate = useNavigate();

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const handleInputChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, '');
    setValorEmprestimo(Number(numericValue));
  };


  const consultarOfertas = async (e) => {
    e.preventDefault();

    if (valorEmprestimo < 150 || valorEmprestimo > 100000) {
      setError('O valor deve ser entre 150,00 e 100.000,00');
      return;
    }

    const userId = JSON.parse(localStorage.getItem('user')).user.id;
    const parcelas = buttonLabels[selectedIndex];

    try {
      const url = new URL('http://localhost:3001/loans/simulate');
      url.searchParams.append('userId', userId);
      url.searchParams.append('loanAmount', valorEmprestimo);
      url.searchParams.append('numberOfInstallments', parcelas);

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Erro na requisição');
      }

      const data = await response.json();

      console.log(data)
      
      // Navegar para a página de crédito e passar os dados como estado
      navigate('/credito', { state: { ofertas: data } });

    } catch (err) {
      console.error('Erro ao consultar ofertas:', err);
      setError('Ocorreu um erro ao consultar as ofertas.');
    }
  };

  return (
    <C.FormBody>
      <C.DivOpcoes>
        <Espaco height="30px" />
        <TextLine 
          fontFamily="Nunito, sans-serif"
          fontWeight="700"
          fontSize="17px"
          color="#000000"
          margin="0px 20px"
        >
          Qual o valor que você deseja <br />
          solicitar?
        </TextLine>
        
        <Espaco height="20px" />

        <C.DivInput>
          <InputBox
            border="1px solid #858585"
            width="297px"
            fontFamily="Nunito, sans-serif"
            fontSize="18px"
            padding="13px 10px 13px 10px"
            type="text"
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

        <Espaco height="30px" />

        <TextLine
          fontFamily="Nunito, sans-serif"
          fontWeight="700"
          fontSize="17px"
          color="#000000"
          margin="0px 20px"
        >
          Como você gostaria de parcelar o <br />
          pagamento?
        </TextLine>

        <Espaco height="20px" />

        <C.SectionX>
          {buttonLabels.map((label, index) => (
            <ButtonAll
              key={index}
              className={"parcelas"}
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
              cursor="pointer"
              isSelected={selectedIndex === index}
              onClick={() => handleClick(index)}
            >
              {label}x
            </ButtonAll>
          ))}
        </C.SectionX>
        <Espaco height="35px" />
      </C.DivOpcoes>

      <Espaco height="10px" />
      <ButtonAll 
        backgroundColor="#048F44" 
        fontFamily="Nunito, sans-serif" 
        fontSize="17px" 
        fontWeight="900"
        onClick={consultarOfertas}
      >
        Consultar ofertas
      </ButtonAll>

      <TextLine>{error}</TextLine>
    </C.FormBody>
  );
}

export default FormSimular;
