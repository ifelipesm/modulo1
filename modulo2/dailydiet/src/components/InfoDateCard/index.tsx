import { Container, Description, Title } from './styles';

type Props = {
  title: string;
  day: string;
  hour: string;
}

export function InfoDateCard({title,day,hour}:Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{day} às {hour}</Description>
    </Container>
  );
}