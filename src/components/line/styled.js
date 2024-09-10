import styled from 'styled-components';

export const GradientLine = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  background: ${({ backgroudColor }) => backgroudColor};
  margin: ${({ margin }) => margin};
  border-radius:${({ radius }) => radius};
  padding:${({ padding }) => padding};
  border-image-slice: ${({ borderImgSlice }) => borderImgSlice};
  border-image-source: ${({ borderImgSource }) => borderImgSource};


`


