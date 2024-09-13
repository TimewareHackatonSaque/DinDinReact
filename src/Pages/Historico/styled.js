import styled from 'styled-components';




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

export const DivLine = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  width: 100%; /* Ocupa toda a largura disponível */
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: 15px auto;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

export const Instituicao = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #048F44;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const ValorTotal = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

export const Parcelas = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0 0;
`;

export const ButtonDetalhes = styled.button`
  margin-top: 15px;
  padding: 10px;
  background-color: #048F44;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #036c33;
  }
`;
