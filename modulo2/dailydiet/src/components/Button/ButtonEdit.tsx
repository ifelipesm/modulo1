import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonTypeStyleProps, Container, IconEdit, Title } from './styles';

type Props = TouchableOpacityProps & {
  text: string;
  type?: ButtonTypeStyleProps;
  value: () => void;
}

export function ButtonEdit({value,text,type='PRIMARY',...rest}:Props) {
  return (
    <Container onPress={value} type={type} {...rest}>
      <IconEdit/>
      <Title type={type}>{text}</Title>
  </Container>
  );
}