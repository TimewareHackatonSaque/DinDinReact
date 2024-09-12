import { useEffect, useState } from 'react';
import { ButtonAll } from '../../../components/button/styled';
import Espaco from '../../../components/space/space';
import InputBox from '../../../components/TextBox/TextBox';

function FormPerfil() {
  const [user, setUser] = useState({
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
      <InputBox
        name="nome"
        value={user.nome}
        onChange={handleChange}
        placeholder="Nome"
      />
      <Espaco height="30px" />

      <InputBox
        
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
        disabled
      />
      <Espaco height="30px" />

      <InputBox
        
        name="cpf"
        value={user.cpf}
        onChange={handleChange}
        placeholder="CPF"
      />
      <Espaco height="30px" />

      <InputBox
        name="telefone"
        value={user.telefone}
        onChange={handleChange}
        placeholder="Telefone"
      />
      <Espaco height="30px" />

      <InputBox
        name="senha"
        value={user.senha}
        onChange={handleChange}
        placeholder="Senha"
        type="password"
      />
      <Espaco height="30px" />

      <ButtonAll
        backgroundColor="#048F44"
        fontFamily="Nunito, sans-serif"
        fontSize="17px"
        fontWeight="900"
      >
        Atualizar
      </ButtonAll>
    </form>
  );
}

export default FormPerfil;
