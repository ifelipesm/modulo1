import React from 'react';
import * as S from './styles';

type Props = {
  title: string;
}

export function GroupCard({title}:Props) {
  return (
    <S.Container>
      <S.Icon />
      <S.Title>
        {title}
      </S.Title>
    </S.Container>
  );
}