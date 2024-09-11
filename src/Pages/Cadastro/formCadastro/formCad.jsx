import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonAll from '../../../components/button/buttonAll';
import InputSenha from '../../../components/inputSenhas/inputSenha';
import Espaco from '../../../components/space/space';
import InputBox from '../../../components/TextBox/TextBox';
import TextLine from '../../../components/textLine/textLine';
import * as C from './styled';

function FormCad(){
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('As senhas não correspondem.');
      
    } else {
      setError('');
      console.log('Formulário enviado com sucesso');
      navigate('/');
    }
  };
  return(
    <C.FormCad onSubmit={handleSubmit} >
      
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

      <InputSenha>
        <InputBox
          onChange={(e) => setPassword(e.target.value)}
          type={senhaVisivel ? 'text' : 'password'}
        >
          Senha
        </InputBox>
      </InputSenha>

      <Espaco height="15px" />

      <InputSenha>
        <InputBox
          onChange={(e) => setConfirmPassword(e.target.value)}
          type={senhaVisivel ? 'text' : 'password'}
        >
          Confirmar Senha
        </InputBox>
      </InputSenha>

      <Espaco height="15px" />

      {error && <TextLine>{error}</TextLine>}

      
        <ButtonAll backgroundColor="#048F44">Próximo</ButtonAll>
      
    </C.FormCad>
  )
}

export default FormCad