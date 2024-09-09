import { GoChevronLeft } from 'react-icons/go';
import styled from 'styled-components';


export const Icon = styled(GoChevronLeft)`
  color: #373737;
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin}; 
`;
