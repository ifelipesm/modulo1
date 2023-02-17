import React from 'react';
import { Background, Icon, Title } from './styles';

type Props = {
  title: string;
}

export function Header({  title }:Props) {
  return (
    <Background>
      <Icon/>
      <Title>{title}</Title>
  
    </Background>
  );
}