import { GoBack } from '@components/GoBack';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Background, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
 redirectTo: () => void;
}

export function Header({title,redirectTo}:Props) {
  return (
    <Background>
      <GoBack redirect={redirectTo}/>
      <Title>{title}</Title>
    </Background>
  );
}