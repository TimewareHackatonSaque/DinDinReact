import { GoChevronLeft } from 'react-icons/go';
import styled from 'styled-components';

export const DivBody = styled.div`
  height: 100vh;
  align-items: center;
`

export const DivTop = styled.div`
  display: flex;
  flex-direction: row;
  margin: 56px 32px 0px;
`;

export const Icon = styled(GoChevronLeft)`
  color: #373737;
  height: 24px;
  font-size: 24px;
  margin-right: 20px; 
`;

export const Footer = styled.footer`
  display:flex;
  justify-content: center;
  bottom: 10px;
  position: absolute;
  width: 100vw;
`;