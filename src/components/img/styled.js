import styled from 'styled-components';

export const DivImgLogin = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
`; 

export const ImgPrincipal = styled.img`
    width: 111px;
    height: 116px;
    filter: ${({ Invert }) => Invert};
    width:${({ width }) => width}
`;