import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Title, Container, ButtonTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  text: string;
  type?: ButtonTypeStyleProps;
  value: () => void;
}

export function Button({value,text,type='PRIMARY',...rest}:Props) {
  return (
    <Container onPress={value} type={type} {...rest}>
      <Title type={type}>{text}</Title>
    </Container>
  );
}