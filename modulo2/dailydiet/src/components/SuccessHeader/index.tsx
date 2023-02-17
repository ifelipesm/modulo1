import React, { useState } from 'react';
import {  B, HeaderContainer, HeaderText, HeaderTitle, ImageOnDiet, ImageOutOfDiet, SuccessHeaderStyleProps} from './styles';
import ondiet from '@assets/ondiet.png';
import outofdiet from '@assets/outofdiet.png';

type Props  = SuccessHeaderStyleProps & {
  diet: boolean;
}

export function SuccessHeader({diet}:Props) {
  return (
  <HeaderContainer diet={diet}>
    {diet ?     
      <>
        <HeaderTitle diet={diet}>Continue assim!</HeaderTitle>
        <HeaderText diet={diet}>Você continua <B>dentro da dieta</B>. Muito bem!</HeaderText>
        <ImageOnDiet source={ondiet}/>
      </>
      :
      <>
        <HeaderTitle diet={diet}>Que Pena!</HeaderTitle>
        <HeaderText diet={diet}>Você <B>saiu da dieta</B> dessa vez, mas continue se esforçando e não desista!</HeaderText>
        <ImageOutOfDiet source={outofdiet} />
      </>
    }
  </HeaderContainer>
  );
}