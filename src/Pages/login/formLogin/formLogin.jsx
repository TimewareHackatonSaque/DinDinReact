import { useState } from 'react';
import { Link } from 'react-router-dom';  // Importando o Link correto
import InputBox from '../../../components/TextBox/TextBox';
import ButtonAll from '../../../components/button/buttonAll';
import Espaco from '../../../components/space/space';
import TextLine from '../../../components/textLine/textLine';
import * as C from './styled';

function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const HandleSubmit = (email, password, event) => {
        event.preventDefault();
        if (!email || !password) {
            setError("Informe o email e/ou a senha");
        }
    };

    return (
        <C.FormLogin>
            <InputBox 
                onChange={(e) => setEmail(e.target.value)} 
                type='email'>
                    Email
            </InputBox>

            <Espaco height="13px" />

            <InputBox
                onChange={(e) => setPassword(e.target.value)} 
                type='password'>
                Senha
            </InputBox>

            <Espaco height="25px" />
            
            <Link to="/home">  {/* Link para a Home ao clicar no botão "Entrar" */}
                <ButtonAll onClick={(e) => HandleSubmit(email, password, e)} backgroundColor="#048F44">
                    Entrar
                </ButtonAll>
            </Link>

            <Espaco height="5px" />

            <TextLine fontFamily="Nunito, sans-serif" fontSize="14px" color="#6D6D6D" fontWeight="400">
                Esqueceu a senha?
            </TextLine>

            <TextLine fontFamily="Nunito, sans-serif" fontSize="14px" color="#6D6D6D" fontWeight="400">
                Ainda não tem uma conta? <Link to="/cadastro" style={{ color: '#048F44' }}>Cadastre-se</Link> {/* Link para a página de cadastro */}
            </TextLine>

            <p>{error}</p>
        </C.FormLogin>
    );
}

export default FormLogin;
