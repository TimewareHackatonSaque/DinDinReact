import styled from 'styled-components';

export const ButtonAll = styled.button`
  background-color: ${({ backgroundColor, isSelected, colorSelect }) => 
  isSelected ? colorSelect : backgroundColor || '#048F44'};
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
  type:${({type}) => type || 'submit'};
  
  cursor:${({cursor}) => cursor || 'pointer'};
  
  &.parcelas {
    &:hover {
      background-color: ${({ isSelected, colorSelect }) =>
        isSelected ? colorSelect : colorSelect}; /* Fallback para hover */
      color: ${({ isSelected }) => (isSelected ? 'white' : 'white')}; /* Ajusta cor do texto */
    };
  }

  ${({ isSelected, colorSelect }) =>
    isSelected &&
    `
    background-color: ${colorSelect};
    color: white; /* Altere conforme a necessidade */
  `}
  
  &:active {
    transform: scale(0.98);
  };

`