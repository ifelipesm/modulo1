import { TouchableOpacityProps } from 'react-native';
import { ButtonTypeStyleProps, Container, IconEdit, Title } from './styles';

type Props = TouchableOpacityProps & {
  text: string;
  type?: ButtonTypeStyleProps;
  value: () => void;
}

export function ButtonCreate({value,text,type='PRIMARY',...rest}:Props) {
  return (
    <Container onPress={value} type={type} {...rest}>
      <Title type={type}>{text}</Title>
    </Container>
  );
}