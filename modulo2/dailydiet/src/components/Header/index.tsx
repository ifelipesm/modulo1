import { GoBack } from '@components/GoBack';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Background, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  onDiet?: boolean;
  redirectTo: () => void;
}

export function Header({title,onDiet,redirectTo}:Props) {
  return (
    <Background dietType={onDiet}>
      <GoBack redirect={redirectTo}/>
      <Title>{title}</Title>
    </Background>
  );
}