import { SuccessButton } from '@components/SuccessButton';
import { SuccessHeader } from '@components/SuccessHeader';
import { useNavigation, useRoute } from '@react-navigation/native';
import { mealStorageDTO } from '@storage/Meal/mealStorageDTO';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { Container } from './styles';

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
  navigation.navigate('overview',{meal});
  }
  
  return (
    <>
    <SuccessHeader diet={meal.diet} />
    <SuccessButton onRedirect={goToHome} />    
    </>
  );
}