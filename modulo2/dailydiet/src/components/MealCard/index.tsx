import { Container, Hour, Icon, Meal, StatusGreen, StatusRed } from './styles';
import { divider } from '@assets/divider.png';

type Props = {
  hour: string;
  meal: string;
  diet: boolean;
}

export function MealCard({hour,meal,diet}: Props) {
  return (
    <Container>

      <Hour>{hour}</Hour>
      <Icon source={divider} />
      <Meal>{meal}</Meal>
      { diet ? <StatusGreen /> : <StatusRed /> }

    </Container>
  );
}