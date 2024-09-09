import styled from 'styled-components';

export const TextP = styled.p`
 color: ${({color}) => color};
 font-size: ${({fontSize}) => fontSize};
 margin: ${({margin}) => margin};
 font-weight: ${({fontWeight}) => fontWeight};
 font-family: ${({ fontFamily }) => fontFamily};
`