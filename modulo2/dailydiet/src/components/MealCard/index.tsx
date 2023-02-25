import { Container, Hour, Icon, Meal, StatusGreen, StatusRed } from './styles';
import { divider } from '@assets/divider.png';

type Props = {
  hour: string;
  meal: string;
  diet: boolean;
  onRedirect: () => void;
}

export function MealCard({hour,meal,diet,onRedirect}: Props) {
  return (
    <Container onPress={onRedirect}>

      <Hour>{hour}</Hour>
      <Icon source={divider} />
      <Meal>{meal}</Meal>
      { diet ? <StatusGreen /> : <StatusRed /> }

    </Container>
  );
}