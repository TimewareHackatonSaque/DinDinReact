import IconLeft from '../../components/IconLeft/left';
import Link from '../../components/Links/links';
import Espaco from "../../components/space/space";
import TextLine from "../../components/textLine/textLine";
import FormCad from "./formCadastro/formCad";
import * as C from './styled';

function Cadastro(){
  return(
    <C.DivBody>

      <C.DivTop>

        <IconLeft fontSize="24px" margin="0px 20px 0px 0px"/>

        <TextLine fontSize="20px" fontWeight="400" margin="0px" >
          Cadastre-se
        </TextLine>

      </C.DivTop>

      <Espaco height="70px"/>
      <FormCad></FormCad>

      <C.Footer>
        <TextLine fontFamily="Nunito, sans-serif" fontSize="14px" color="#6D6D6D" fontWeight="400">
          Já tem uma conta? <Link href="https://www.exemplo.com" color="#048F44">Entre agora</Link>
        </TextLine>
      </C.Footer>
    </C.DivBody>
  )
}

export default Cadastro