import styled from 'styled-components';  // Certifique-se de importar 'styled' do 'styled-components'
import { NavLink as RouterNavLink } from 'react-router-dom';  // Certifique-se de importar 'NavLink' do 'react-router-dom'

// Estilo do container do Footer
export const FooterContainer = styled.footer`
  background-color: #27ae60;
  border-radius: 23px 23px 0 0;  /* Aplica o border-radius corretamente nos cantos superiores */
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;  /* Certifique-se de que o footer está no plano certo */

  @media (min-width: 768px) {
    height: 90px;
  }
`;

export const BottomNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 500px;
  position: relative;
`;

export const NavLinkStyled = styled(RouterNavLink)`
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.active {
    font-weight: bold;
    color: #FF8300;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

// Contêiner para a lupa e a label juntos
export const SearchLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 45px 0px 0px 0px;
  bottom: 10px;  /* Ajusta o espaçamento entre a lupa e a label */
`;

// Círculo laranja para a lupa
export const SearchWrapper = styled.div`
  background-color: #FF8300;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -35px;  /* Mantém o círculo saindo metade para fora */
  z-index: 2;

  @media (min-width: 768px) {
    width: 90px;
    height: 90px;
    top: -45px;
  }

  svg {
    color: white;
    width: 30px;
    height: 30px;

    @media (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
`;
