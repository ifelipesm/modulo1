import { TouchableOpacityProps } from 'react-native';
import { ButtonTypeStyleProps, Container, IconRemove, Title } from './styles';

type Props = TouchableOpacityProps & {
  text: string;
  type?: ButtonTypeStyleProps;
  value: () => void;
}

export function ButtonRemove({value,text,type='PRIMARY',...rest}:Props) {
  return (
    <Container onPress={value} type={type} {...rest}>
    <IconRemove/>
    <Title type={type}>{text}</Title>
  </Container>
  );
}