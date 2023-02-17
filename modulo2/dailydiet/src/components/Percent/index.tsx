import { Container, Subtitle, Title } from './styles';

type Props = {
  onDiet: boolean;
  number: number;
}

export function Percent({number,onDiet=true}:Props) {
  return (
    <Container diet={onDiet}>
      <Title>{number}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}