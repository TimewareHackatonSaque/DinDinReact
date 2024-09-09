import styled from 'styled-components';

export const ButtonAll = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({fontWeight}) => fontWeight};
  font-size: ${({fontSize}) => fontSize};
  width: ${({width}) => width || '350px'};
  height: ${({height}) => height || '52px'};
  border: ${({border}) => border || 'none'};
  border-radius: 8px;
  padding: 18px, 116px, 18px, 116px; 
  margin:${({margin}) => margin || '0px'};
  color: ${({color}) => color || 'white'};
`