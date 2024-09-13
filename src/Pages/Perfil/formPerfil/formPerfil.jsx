import { useEffect, useState } from 'react';
import { ButtonAll } from '../../../components/button/styled';
import Espaco from '../../../components/space/space';
import InputBox from '../../../components/TextBox/TextBox';
import TextLine from '../../../components/textLine/textLine';

function FormPerfil() {
  const [user, setUser] = useState({
    id:'',
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    senha: ''
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    console.log('Stored user from localStorage:', storedUser); 
    if (storedUser) {
      setUser({
        nome: storedUser.user.nome || '', // Garantir que não seja undefined ou null
        email: storedUser.user.email || '',
        cpf: storedUser.user.cpf || '',
        telefone: storedUser.user.telefone || '',
        senha: '' // Inicialmente não exibe a senha por razões de segurança
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form>
      <TextLine margin="0px">{user.id}</TextLine>
      <TextLine margin="0px">Nome</TextLine>
      <InputBox
        name="nome"
        onChange={handleChange}
        placeholder="Nome"
      >
        {user.nome}
      </InputBox>
      <Espaco height="5px" />

      <TextLine margin="0px">Email</TextLine>
      <InputBox
        name="email"
        onChange={handleChange}
        placeholder="Email"
        type="email"
      >
        {user.email}
      </InputBox>
      
      <Espaco height="5px" />

      <TextLine margin="0px">CPF</TextLine>
      <InputBox
        maxlength={11}
        name="cpf"
        onChange={handleChange}
        placeholder="CPF"
      >
        {user.cpf}
      </InputBox>
      <Espaco height="5px" />

      <TextLine margin="0px">Telefone</TextLine>
      <InputBox
        name="telefone"
        onChange={handleChange}
        placeholder="Telefone"
      >
        {user.telefone}
      </InputBox>
      <Espaco height="5px" />

      <TextLine margin="0px">Senha</TextLine>
      <InputBox
        name="senha"
        onChange={handleChange}
        placeholder="Senha"
        type="password"
      />
      <Espaco height="20px" />

      <ButtonAll
        backgroundColor="#048F44"
        fontFamily="Nunito, sans-serif"
        fontSize="17px"
        fontWeight="900"
      >
        Atualizar
      </ButtonAll>

      <Espaco height="40px" />
    </form>
  );
}

export default FormPerfil;
