import { TouchableOpacityProps } from 'react-native';
import { ButtonTypeStyleProps, Container, IconEdit, Title } from './styles';

type Props = TouchableOpacityProps & {
  text: string;
  type?: ButtonTypeStyleProps;
  action: () => void;
  verify?: boolean;
}

export function ButtonCreate({action,verify,text,type='PRIMARY',...rest}:Props) {
  return (
    <Container onPress={action} type={type} disabled={verify} {...rest}>
      <Title type={type}>{text}</Title>
    </Container>
  );
}