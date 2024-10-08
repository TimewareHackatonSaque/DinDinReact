import styled from 'styled-components';

export const DivBody = styled.div`
  height: 100vh;
  align-items: center;
  @media (min-width: 415px){
    width: 100vw;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column; /* Corrigido para flex-direction */
    background-color: #FFFFFF;
    }
`

export const DivTop = styled.div`
  display: flex;
  flex-direction: row;
  margin: 56px 32px 0px;
`;


export const Footer = styled.footer`
  display:flex;
  justify-content: center;
  bottom: 10px;
  position: absolute;
  width: 100vw;
`;