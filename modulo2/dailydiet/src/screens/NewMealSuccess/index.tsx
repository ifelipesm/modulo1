import { SuccessButton } from '@components/SuccessButton';
import { SuccessHeader } from '@components/SuccessHeader';
import { useNavigation, useRoute } from '@react-navigation/native';

type routeParams = {
   mealDiet: boolean,
};



export function NewMealSuccess() {
  
  const navigation = useNavigation();
  const route = useRoute();
  const { mealDiet } = route.params as routeParams;
  
  function goToHome(){
  navigation.navigate('overview');
  }
  
  return (
    <>
    <SuccessHeader diet={mealDiet} />
    <SuccessButton onRedirect={goToHome} />    
    </>
  );
}