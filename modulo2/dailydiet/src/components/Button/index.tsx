import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Title, Container, ButtonTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  text: string;
  type?: ButtonTypeStyleProps;
}

export function Button({text,type='PRIMARY',...rest}:Props) {
  return (
    <Container type={type} {...rest}>
      <Title type={type}>{text}</Title>
    </Container>
  );
}