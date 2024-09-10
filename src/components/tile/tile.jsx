import React from 'react';

import { useNavigate } from 'react-router-dom';
import * as S from './styled';

const Tile = ({ icon, text, redirect }) => {
  const navigate = useNavigate();
  return (
    <S.TileContainer onClick={() => navigate(redirect)}>
      <S.IconContainer>{icon}</S.IconContainer>
      <S.Text>{text}</S.Text>
    </S.TileContainer>
  );
};

export default Tile;
