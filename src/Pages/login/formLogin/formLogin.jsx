import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importando o Link correto
import InputBox from '../../../components/TextBox/TextBox';
import ButtonAll from '../../../components/button/buttonAll';
import InputSenha from '../../../components/inputSenhas/inputSenha';
import Espaco from '../../../components/space/space';
import TextLine from '../../../components/textLine/textLine';
import * as C from './styled';

function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [senhaVisivel, setSenhaVisivel] = useState(false);


    const navigate = useNavigate();

    /*const HandleSubmit = (email, password, event) => {
        event.preventDefault();
        if (!email || !password) {
            setError("Informe o email e/ou a senha");
        }
    };*/

    return (
        <C.FormLogin>
            <InputBox 
                onChange={(e) => setEmail(e.target.value)} 
                type='email'>
                    Email
            </InputBox>

            <Espaco height="13px" />

            <InputSenha>
                <InputBox
                    onChange={(e) => setPassword(e.target.value)}
                    type={senhaVisivel ? 'text' : 'password'}
                >
                    Senha
                </InputBox>
            </InputSenha>
            

            <Espaco height="25px" />
            
            <Link to="/home">  {/* Link para a Home ao clicar no botão "Entrar" */}
                <ButtonAll /*</Link>onClick={(e) => HandleSubmit(email, password, e)}*/
                    backgroundColor="#048F44"
                    onClick={(e) => navigate("/home")}
                >
                    Entrar
                </ButtonAll>
            </Link>

            <Espaco height="5px" />

            <TextLine fontFamily="Nunito, sans-serif" fontSize="14px" color="#6D6D6D" fontWeight="400">
                Esqueceu a senha?
            </TextLine>

            <TextLine fontFamily="Nunito, sans-serif" fontSize="14px" color="#6D6D6D" fontWeight="400">
                Ainda não tem uma conta? <Link  to="/cadastro" style={{ color: '#048F44' }}>Cadastre-se</Link> {/* Link para a página de cadastro */}
            </TextLine>

            <p>{error}</p>
        </C.FormLogin>
    );
}

export default FormLogin;
