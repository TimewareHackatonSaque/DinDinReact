import React from 'react';
import * as S from './styled';

const Tile = ({ icon, text }) => {
  return (
    <S.TileContainer>
      <S.IconContainer>{icon}</S.IconContainer>
      <S.Text>{text}</S.Text>
    </S.TileContainer>
  );
};

export default Tile;
