import ImgLogin from '../../components/img/imgLogin';
import Espaco from '../../components/space/space';
import FormLogin from './formLogin/formLogin';
import * as C from './styled';

function Login(){
    return (
        <C.DivLogin>
            <Espaco height="46px" />
            <ImgLogin></ImgLogin>

            <Espaco height="54px" />
            <C.TituloLogin>Bem vindo</C.TituloLogin>

            <Espaco height="16px"/>
            <C.ParagrafoComp>Complete os dados abaixo <br/> 
                para realizar seu login
            </C.ParagrafoComp>

            <Espaco height="60px" />
            <FormLogin/>
            
        </C.DivLogin>
    )
}

export default Login;