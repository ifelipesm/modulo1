import { Button } from '@components/Button';
import { ButtonNew } from '@components/Button/ButtonNew';
import { HomeHeader } from '@components/HomeHeader';
import { Percent } from '@components/Percent';
import { useNavigation } from '@react-navigation/native';
import { Meals } from './styles';

export function DietOverview() {
  const Healthyness = 87.88;

  const navigation = useNavigation();


  function dietPercentage(){
    true;
  }

  function goNewMeal(){
    navigation.navigate('new');
  }

  return (
    <>
      <HomeHeader />
      <Percent number={Healthyness} onDiet={true} />
      <Meals>
      <ButtonNew title='Nova Refeição' redirect={goNewMeal} />
      </Meals>
    </>
  );
}