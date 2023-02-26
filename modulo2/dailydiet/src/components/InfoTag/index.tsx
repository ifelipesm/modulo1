import theme from '@theme/index';
import { useTheme } from 'styled-components/native';
import { Container, Icon, Title } from './styles';

type Props = {
  onDiet: boolean
}

export function InfoTag({onDiet}:Props) {
  useTheme();
  return (
    <Container>
      <Icon color={onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK} />
      <Title>{onDiet ? 'dentro da dieta' : 'fora da dieta'}</Title>
    </Container>
  );
}