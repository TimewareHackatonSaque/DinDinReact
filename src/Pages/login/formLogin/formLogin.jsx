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

    async function handleSubmit(e) {
        e.preventDefault();
        
        if (!email || !password) {
          setError("Informe o email e/ou a senha");
          return;
        }
      
        try {
          const response = await fetch('http://localhost:3001/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
      
          if (response.ok) {
            const data = await response.json();
            localStorage.setItem('user', JSON.stringify(data));
            console.log('Login bem-sucedido:', data);
            navigate('/home');
          } else {
            const errorData = await response.json();
            setError('apapapa');
          }
        } catch (error) {
          console.error('Erro de conexão:', error);
          setError('Erro de conexão com o servidor.');
        }
      }


    return (
        <C.FormLogin onSubmit={handleSubmit}>
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
            
            <ButtonAll
                type="submit"
                backgroundColor="#048F44"
            >
                Entrar
            </ButtonAll>

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
