import theme from '@theme/index';
import { useTheme } from 'styled-components';
import { Container, IconArrow, Subtitle, Title } from './styles';

type Props = {
  number: number;
  redirect: ()  => void;
}

export function Percent({number,redirect}:Props) {
  useTheme();
  return (
    <Container percentage={number} onPress={redirect}>
      <IconArrow color={number >= 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}/>
      <Title>{number? number : '0'}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}