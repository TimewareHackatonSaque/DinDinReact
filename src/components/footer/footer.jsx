import React from 'react';
import { AiOutlineHome } from 'react-icons/ai'; // Ícone Home
import { BiUserCircle } from 'react-icons/bi'; // Ícone Perfil
import { CiSearch } from 'react-icons/ci'; // Ícone de lupa
import TextLine from '../textLine/textLine';
import { BottomNav, FooterContainer, NavLinkStyled, SearchLabelWrapper, SearchWrapper } from './styled';

const Footer = () => {
  return (
    <FooterContainer>
      <BottomNav>
        {/* Ícone Home */}
        <NavLinkStyled to="/" exact>
          <AiOutlineHome size={24} />
          <TextLine fontFamily="Poppins, sans-serif" fontSize="10px" color="#FFFFFF" fontWeight="400">Home</TextLine>
        </NavLinkStyled>

        {/* Contêiner da lupa com a label abaixo (Simular Empréstimo) */}
        <NavLinkStyled to="/simulador">
          <SearchLabelWrapper>
            <SearchWrapper>
              <CiSearch size={30} color="white" />
            </SearchWrapper>
            <TextLine 
              fontFamily="Poppins, sans-serif" 
              fontSize="10px" 
              color="#FFFFFF" 
              fontWeight="400" 
              marginTop="10px"
            >
              Simular Empréstimo
            </TextLine>
          </SearchLabelWrapper>
        </NavLinkStyled>

        {/* Ícone Perfil */}
        <NavLinkStyled to="/perfil">
          <BiUserCircle size={24} />
          <TextLine fontFamily="Poppins, sans-serif" fontSize="10px" color="#FFFFFF" fontWeight="400">Perfil</TextLine>
        </NavLinkStyled>
      </BottomNav>
    </FooterContainer>
  );
};

export default Footer;
