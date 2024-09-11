import styled from 'styled-components';

export const DivBody = styled.div`
  height: 100vh;
  align-items: center;
`

export const TituloLogin = styled.h1`
    font-size: 33px; 
    color: #373737;
    font-weight: 600;
    margin-bottom: 0px;
    margin: 0px 0px 0px 49px;
    @media(min-width: 415px){
    text-align: center;
    margin: 0px;
    }
`;

export const TituloCredito = styled.h1`
    font-family: Montserrat;    
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    text-align: left;
    margin: 0px 0px 0px 49px
`;

export const DivLine = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  width: 100%; /* Ocupa toda a largura disponível */
`

export const DivOpcoes = styled.div`
  @media(min-width: 415px){
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`


