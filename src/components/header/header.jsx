import { useEffect, useState } from 'react';
import { FaCog, FaEye, FaEyeSlash, FaUserAlt } from 'react-icons/fa'; // Ícones do react-icons
import imagem from '../../imagens/logo.png';
import { NavLinkStyled } from '../footer/styled';
import ImgLogin from '../img/imgLogin';
import TextLine from '../textLine/textLine';
import * as C from './styled'; // Corrigido para 'styled'

const Header = () => {
  const [showSaldo, setShowSaldo] = useState(false);
  const [saldo] = useState(1204.35);  // Mantém o mock do saldo

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.user) {
        setUserName(parsedUser.user.nome || 'Visitante'); // Define 'Visitante' se o nome não estiver disponível
      }
    }
  }, []);

  return (
    <C.Header>
      {/* Primeira linha com o logo e ícones de usuário e configurações */}
      <C.Row>
        <C.LogoWrapper>
          {/* Componente de Logo */}
          <ImgLogin image={imagem} />
        </C.LogoWrapper>

        <NavLinkStyled to="/perfil">
          <C.BtnRight>
            <C.IconWrapper >
              <FaUserAlt size={24} color="white" />  {/* Ícone de usuário */}
            </C.IconWrapper>
            <FaCog size={24} color="white" />  {/* Ícone de configurações */}
          </C.BtnRight>
        </NavLinkStyled>
        
      </C.Row>

      {/* Segunda linha com saldo e ícone de visualização */}
      <C.Row>
        <C.SaldoValue>
          <TextLine fontFamily="Poppins, sans-serif" fontSize="16px" color="#FFFFFF" fontWeight="400">
            Bem vindo(a) ao {userName}
          </TextLine>
          <br />
          {showSaldo
            ? saldo.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })
            : '----'}
        </C.SaldoValue>

        {/* Botão de visualizar/ocultar saldo */}
        <C.ViewSaldo onClick={() => setShowSaldo(!showSaldo)}>
          {showSaldo ? (
            <FaEyeSlash size={24} color="white" />
          ) : (
            <FaEye size={24} color="white" />
          )}
        </C.ViewSaldo>
      </C.Row>
    </C.Header>
  );
};

export default Header;
