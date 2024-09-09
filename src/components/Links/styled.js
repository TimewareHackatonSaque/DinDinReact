import styled from 'styled-components';

export const LinkA = styled.a`
  color: ${({ color }) => color};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;