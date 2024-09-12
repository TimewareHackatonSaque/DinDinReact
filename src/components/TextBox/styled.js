import styled from 'styled-components';


export const InputText = styled.input`
  height: hug (55px);
  padding: ${({padding}) => padding || '18px 15px 18px 26px'};
  border-radius: 8px;
  box-shadow: 0px 4px 20px 0px #0000000F;
  opacity: 0px;
  border: ${({border}) => border || 'none'};
  width: ${({width}) => width || '310px'};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({fontSize}) => fontSize};
  justify-content: ${({ justFy }) => justFy};
  display:${({ display }) => display}
`;
