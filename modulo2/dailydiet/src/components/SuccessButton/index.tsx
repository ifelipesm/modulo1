import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ContainerSuccessButton, LabelSuccessButton } from './styles';

type Props = TouchableOpacityProps & {
  onRedirect: () => void;
}
export function SuccessButton({onRedirect}:Props) {
  return (
    <ContainerSuccessButton onPress={onRedirect}>
      <LabelSuccessButton>Ir para a página inicial</LabelSuccessButton>
    </ContainerSuccessButton>
  );
}