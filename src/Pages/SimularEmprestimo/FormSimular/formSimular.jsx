import InputBox from '../../../components/TextBox/TextBox';
import ButtonAll from '../../../components/button/buttonAll';
import TextLine from '../../../components/textLine/textLine';
import * as C from './styled';

function FormSimular(){
  return(
    <C.FormBody>

      <C.DivOpcoes>
        <TextLine>Qual o valor que você deseja solicitar?</TextLine>

        <InputBox>R$</InputBox>

        <TextLine>O valor pode ser de R$ 150,00 à R$ 100.000,00</TextLine>

        <TextLine>Como você gostaria de parcelar o pagamento?</TextLine>

        <C.SectionX>
          <ButtonAll width="70px" height="50px" margin="10px 10px 10px 0px">6x</ButtonAll>
          <ButtonAll width="70px" height="50px" margin="10px 10px 10px 0px">6x</ButtonAll>
          <ButtonAll width="70px" height="50px" margin="10px 10px 10px 0px">6x</ButtonAll>
          <ButtonAll width="70px" height="50px" margin="10px 10px 10px 0px">6x</ButtonAll>
          <ButtonAll width="70px" height="50px" margin="10px 10px 10px 0px">6x</ButtonAll>
          <ButtonAll width="70px" height="50px" margin="10px 10px 10px 0px">6x</ButtonAll>
          <ButtonAll width="70px" height="50px" margin="10px 10px 10px 0px">6x</ButtonAll>
          <ButtonAll width="70px" height="50px" margin="10px 10px 10px 0px">6x</ButtonAll>
        </C.SectionX>

      </C.DivOpcoes>

      <ButtonAll backgroundColor="#048F44" fontFamily="Nunito, sans-serif" fontSize="17px" fontWeight="900">Consultar ofertas</ButtonAll>
   
    </C.FormBody>
    
  )
}

export default FormSimular