import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonAll from '../../../components/button/buttonAll';
import InputSenha from '../../../components/inputSenhas/inputSenha';
import Espaco from '../../../components/space/space';
import InputBox from '../../../components/TextBox/TextBox';
import TextLine from '../../../components/textLine/textLine';
import * as C from './styled';

function FormCad() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('As senhas não correspondem.');
      return;
    } 

    const userData = {
      nome,
      telefone,
      email,
      cpf,
      senha: password,
    };

    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      console.log('Response:', response); // Adicione isto

      if (response.ok) {
        alert('Enviado com sucesso');
        navigate('/');
      } else {
        const erroData = await response.json();
        console.log('Error:', erroData);
        setError('Erro ao criar usuário.');
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
      setError('Erro de conexão com o servidor.');
    }
  };

  return (
    <C.FormCad onSubmit={handleSubmit}>
      <InputBox value={nome} onChange={(e) => setNome(e.target.value)}>
        Nome Completo
      </InputBox>

      <Espaco height="15px" />

      <InputBox maxlength={11} value={telefone} onChange={(e) => setTelefone(e.target.value)}>
        Telefone
      </InputBox>

      <Espaco height="15px" />

      <InputBox type="email" value={email} onChange={(e) => setEmail(e.target.value)}>
        Email
      </InputBox>

      <Espaco height="15px" />

      <InputBox maxlength={11} value={cpf} onChange={(e) => setCpf(e.target.value)}>
        CPF
      </InputBox>

      <Espaco height="15px" />

      <InputSenha>
        <InputBox
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={senhaVisivel ? 'text' : 'password'}
        >
          Senha
        </InputBox>
      </InputSenha>

      <Espaco height="15px" />

      <InputSenha>
        <InputBox
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type={senhaVisivel ? 'text' : 'password'}
        >
          Confirmar Senha
        </InputBox>
      </InputSenha>

      <Espaco height="15px" />

      {error && <TextLine>{error}</TextLine>}

      <ButtonAll type="submit" backgroundColor="#048F44">
        Próximo
      </ButtonAll>
    </C.FormCad>
  );
}

export default FormCad;
