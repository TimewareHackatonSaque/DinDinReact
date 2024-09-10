import { useState } from 'react';
import * as C from './styled';  // Corrigido para 'styled'
import { FaUserAlt, FaCog, FaEye, FaEyeSlash } from 'react-icons/fa';  // Ícones do react-icons
import ImgLogin from '../img/imgLogin';  // Importando o logo que é um componente
import TextLine from '../textLine/textLine';

const Header = () => {
  const [showSaldo, setShowSaldo] = useState(false);
  const [saldo, setSaldo] = useState(1204.35);  // Mantém o mock do saldo

  return (
    <C.Header>
      {/* Primeira linha com o logo e ícones de usuário e configurações */}
      <C.Row>
        {/* Componente de Logo */}
        <ImgLogin />
        <C.BtnRight>
          <C.IconWrapper>
            <FaUserAlt size={24} color="white" />  {/* Substituindo o ícone de usuário */}
          </C.IconWrapper>
          <FaCog size={24} color="white" />  {/* Substituindo o ícone de configurações */}
        </C.BtnRight>
      </C.Row>

      {/* Segunda linha com saldo e ícone de visualização */}
      <C.Row>
        <C.SaldoValue>
          <TextLine fontFamily="Poppins, sans-serif" fontSize="16px" color="#FFFFFF" fontWeight="400">Bem vindo(a) ao DogDindin</TextLine>
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
