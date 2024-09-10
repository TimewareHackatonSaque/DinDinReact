import styled from 'styled-components';

export const DivLine = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  width: 100%; /* Ocupa toda a largura disponível */
`
export const Container = styled.div`
  max-width: 400px;
  margin: auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Logo = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 10px 0;
`;

export const Amount = styled.h3`
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0;
`;

export const Installments = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

export const Cet = styled.div`
  background-color: #e0f7e0;
  color: #3c763d;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  cursor: pointer;
  font-size: 16px;

  &.solicitar {
    background-color: #ff8c00; /* Cor laranja */
    color: white;

    &:hover {
      background-color: #e07b00;
    }
  }

  &.detalhes {
    background-color: transparent;
    color: #ff8c00;
    border: 1px solid #ff8c00;

    &:hover {
      background-color: #ff8c00;
      color: white;
    }
  }
`;