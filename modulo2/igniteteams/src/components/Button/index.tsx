import React from 'react';
import { ButtonTypeStyleProps, Container, Title } from './styles';
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  onRemove: () => void;
}

export function Button({title,type='PRIMARY',onRemove,...rest}:Props) {
  return ( 
    <Container onPress={onRemove} type={type} {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  );
}