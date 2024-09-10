import styled from 'styled-components';
import ButtonAll from '../../../components/button/buttonAll';
import LineGradiente from '../../../components/line/line';
import Espaco from '../../../components/space/space';
import TextLine from '../../../components/textLine/textLine';
import * as C from './styled';


function FormCredito({valorEmprestimo, parcelas, valorParcela, cet}) {

    const solicitarEmprestimo = () => {
        alert(`Solicitando empréstimo de R$ ${valorEmprestimo}`);
    };

    return (
      <C.Container>
        <Logo src="https://via.placeholder.com/150x50?text=BANCO+PAN" alt="Banco Pan" />

        <C.DivLine>
          <LineGradiente
            width="290px"
            height="1.26px"
            backgroudColor="#00000024"
          />
        </C.DivLine>

        <TextLine fontWeight="400"
          fontSize="20px"
          margin="0px"
        >Empréstimo Pessoal</TextLine>

        <TextLine fontWeight="700" fontSize="27px" 
        color="#373737" margin="0px">
          Valor R$ {valorEmprestimo.toFixed(2)}
        </TextLine>

        <Installments>{parcelas}x de R$ {valorParcela.toFixed(2)}</Installments>

        <LineGradiente
            width="180px"
            height="27px"
            backgroudColor="white"
            margin="0px auto"
            padding= "2px"
            border="1.26px solid"
            radius="11.32px"
            borderImgSlice="1"
            borderImgSource="linear-gradient(90deg, #048F44 0%, #F6811D 100%)"
        >
          {`CET de ${cet}%`}
        </LineGradiente>



        <ButtonAll 
          fontFamily="Nunito, sans-serif"
          fontSize="13px"
          fontWeight="900"
          width="290px"
          height="43px"
          className="solicitar"
          backgroundColor="#ff8c00" 
          onClick={solicitarEmprestimo}
        >
          Solicitar
        </ButtonAll>

        <Espaco height="20px"></Espaco>

        <ButtonAll 
          fontFamily="Nunito, sans-serif"
          fontSize="13px"
          fontWeight="900"
          width="290px"
          height="43px"
          className="detalhes" 
          backgroundColor="white" 
          border="1px solid #ff8c00" 
          color="#ff8c00"
        >
          Ver detalhes
        </ButtonAll>
        
      </C.Container>
    );
};
     

const Logo = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const Installments = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

const Cet = styled.div`
  background-color: #e0f7e0;
  color: #3c763d;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
`;



export default FormCredito;