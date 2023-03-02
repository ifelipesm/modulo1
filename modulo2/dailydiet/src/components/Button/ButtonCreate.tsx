import { TouchableOpacityProps } from 'react-native';
import { ButtonTypeStyleProps, Container, IconEdit, Title } from './styles';

type Props = TouchableOpacityProps & {
  text: string;
  type?: ButtonTypeStyleProps;
  action: () => void;
  
}

export function ButtonCreate({action,text,type='PRIMARY',...rest}:Props) {
  return (
    <Container onPress={action} type={type}  {...rest}>
      <Title type={type}>{text}</Title>
    </Container>
  );
}