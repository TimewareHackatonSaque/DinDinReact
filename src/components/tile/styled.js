import styled from 'styled-components';

// Contêiner do Tile
export const TileContainer = styled.div`
  width: 100.px;
  height: 100px;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);  /* Sombra para destacar */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  
  /* Transição suave para o hover */
  transition: transform 0.2s ease-in-out;

  /* Efeito hover para dar feedback ao usuário */
  &:hover {
    transform: scale(1.05);
  }

    @media (min-width: 1000px) {
    &:hover {
      transform: scale(1.02);
    }
  }
`;

// Estilo para o ícone
export const IconContainer = styled.div`
  margin-bottom: 8px;
  svg {
    width: 32px;
    height: 32px;
    color: #373737;  /* Ícone branco para contraste */
  }
`;

// Estilo para o texto
export const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #373737;  /* Texto branco para contraste */
  margin: 0;
  text-align: center;
`;
