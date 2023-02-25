import { SuccessButton } from '@components/SuccessButton';
import { SuccessHeader } from '@components/SuccessHeader';
import { useNavigation, useRoute } from '@react-navigation/native';

type routeParams = {
  meal: {
    name: string,
    description: string,
    day: string,
    hour: string,
    diet: boolean,
  }
};



export function NewMealSuccess() {
  
  const navigation = useNavigation();
  const route = useRoute();
  const { meal } = route.params as routeParams;
  
  function goToHome(){
  navigation.navigate('overview');
  }
  
  return (
    <>
    <SuccessHeader diet={meal.diet} />
    <SuccessButton onRedirect={goToHome} />    
    </>
  );
}