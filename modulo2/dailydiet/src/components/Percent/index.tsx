import theme from '@theme/index';
import { useTheme } from 'styled-components';
import { Container, IconArrow, Subtitle, Title } from './styles';

type Props = {
  number: number;
  text: string;
  redirect: ()  => void;
}

export function Percent({number,text,redirect}:Props) {
  useTheme();
  return (
    <Container percentage={number} onPress={redirect}>
      <IconArrow color={number > 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}/>
      <Title>{text !== 'NaN' ? text : '-'}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}