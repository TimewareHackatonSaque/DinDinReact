import { ButtonAll } from '../../../components/button/styled';
import Espaco from '../../../components/space/space';
import InputBox from '../../../components/TextBox/TextBox';

function FormPerfil(){
  return(
    <div>
      <InputBox>Nome</InputBox>
      <Espaco height="30px"></Espaco>
      <InputBox>Email</InputBox>
      <Espaco height="30px"></Espaco>
      <InputBox>CPF</InputBox>
      <Espaco height="30px"></Espaco>
      <InputBox>Telefone</InputBox>
      <Espaco height="30px"></Espaco>
      <InputBox>Senha</InputBox>

      <Espaco height="30px"></Espaco>
      <ButtonAll
        backgroundColor="#048F44" 
        fontFamily="Nunito, sans-serif" 
        fontSize="17px" 
        fontWeight="900"
      >Atualizar</ButtonAll>
    </div>
  )
}

export default FormPerfil