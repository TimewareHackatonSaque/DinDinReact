import styled from 'styled-components';

export const DivLogin = styled.div`
    @media (max-width: 414px){
    display column;
    background-color: #FFFFFF;
    }
    @media (min-width: 415px){
    width: 100vw;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column; /* Corrigido para flex-direction */
    background-color: #FFFFFF;
    }
    
`;

export const TituloLogin = styled.h1`
    font-size: 36px; 
    color: #373737;
    font-weight: 500;
    margin-left: 36px;
    margin-bottom: 0px;
`;

export const ParagrafoComp = styled.p`
    font-size: 16px;
    color: #37373799;
    margin: 0px 32px;
`