import { Link } from 'react-router-dom'; // Importando o Link correto
import IconLeft from '../../components/IconLeft/left';
import Espaco from "../../components/space/space";
import TextLine from "../../components/textLine/textLine";
import FormCad from "./formCadastro/formCad";
import * as C from './styled';

function Cadastro(){
  return(
    <C.DivBody>

      <C.DivTop>
        <Link to="/">
          <IconLeft fontSize="24px" margin="0px 20px 0px 0px"/>
        </Link>
        <TextLine fontSize="20px" fontWeight="400" margin="0px" >
          Cadastre-se
        </TextLine>

      </C.DivTop>

      <Espaco height="70px"/>
      <FormCad></FormCad>

      <C.Footer>
        <TextLine fontFamily="Nunito, sans-serif" fontSize="14px" color="#6D6D6D" fontWeight="400">
          Já tem uma conta? <Link to="/" style={{ color: '#048F44' }}>Entre agora</Link> {/* Link para a página de cadastro */}
        </TextLine>
      </C.Footer>
    </C.DivBody>
  )
}

export default Cadastro