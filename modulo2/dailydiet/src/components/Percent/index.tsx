import { Container, Subtitle, Title } from './styles';

type Props = {
  number: number;
}

export function Percent({number}:Props) {
  return (
    <Container percentage={number}>
      <Title>{number}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}