import { Link } from 'react-router-dom';
import IconLeft from '../../components/IconLeft/left';
import ImgLogin from '../../components/img/imgLogin';
import Espaco from '../../components/space/space';
import TextLine from '../../components/textLine/textLine';
import Logo from '../../imagens/logo.png';
import FormPerfil from './formPerfil/formPerfil';
import * as C from './styled';

function Perfil(){
  return(
    <>
      <Link to="/home">
        <IconLeft  margin="29px 0px 0px 32px" fontSize="24px" height="24px"></IconLeft>
      </Link>
      <Espaco height="30px"></Espaco>
      
      <C.DivPerfil>
        <TextLine
          fontWeight="600"
          fontSize="33px"
          color="#373737"
          margin="0px 0px 0px 0px"
        >
        <ImgLogin image={Logo}/> Meus dados
        </TextLine>
        <Espaco height="30px"></Espaco>

        <FormPerfil></FormPerfil>
      </C.DivPerfil>
    
    </>
  )
}

export default Perfil;