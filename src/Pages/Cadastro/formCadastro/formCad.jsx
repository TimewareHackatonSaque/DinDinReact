import ButtonAll from '../../../components/button/buttonAll';
import Espaco from '../../../components/space/space';
import InputBox from '../../../components/TextBox/TextBox';
import * as C from './styled';

function FormCad(){
  return(
    <C.FormCad>
      <InputBox>
        Nome Completo
      </InputBox>

      <Espaco height="15px" />

      <InputBox>
        Telefone
      </InputBox>

      <Espaco height="15px" />

      <InputBox type="email">
        Email
      </InputBox>

      <Espaco height="15px" />

      <InputBox>
        CPF
      </InputBox>

      <Espaco height="15px" />

      <InputBox type="password">
        Senha
      </InputBox>

      <Espaco height="15px" />

      <InputBox type="password">
        Confirmar Senha
      </InputBox>

      <Espaco height="15px" />

      <ButtonAll backgroundColor="#048F44">Próximo</ButtonAll>

    </C.FormCad>
  )
}

export default FormCad