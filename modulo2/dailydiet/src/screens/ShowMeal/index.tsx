import { ButtonEdit } from '@components/Button/ButtonEdit';
import { ButtonRemove } from '@components/Button/ButtonRemove';
import { Header } from '@components/Header';
import { InfoDateCard } from '@components/InfoDateCard';
import {  InfoMealCard } from '@components/InfoMealCard';
import { InfoTag } from '@components/InfoTag';
import { useNavigation, useRoute } from '@react-navigation/native';
import { mealRemove } from '@storage/Meal/mealRemove';
import { mealStorageDTO } from '@storage/Meal/mealStorageDTO';
import { Alert } from 'react-native';
import { ButtonBox, Content, Info } from './styles';

type RouteParams = {
  meal: mealStorageDTO;
}

export function ShowMeal() {

  const navigation = useNavigation();
  const routes = useRoute();
  const { meal } = routes.params as RouteParams

   function goHome(){
    navigation.navigate('overview');
  }

  function goEditMeal(){
    navigation.navigate('edit',{meal});
  }

  async function removeMeal(meal: mealStorageDTO){
    await mealRemove(meal);
    goHome();
  }

  async function handleRemoveMeal(){
    Alert.alert('Remover','Deseja realmente excluir o registro da refeição?',[
      {text:'Cancelar',style:'cancel'},
      {text:'Sim, excluir',onPress: ()  =>  removeMeal(meal)},
    ])
  }

  return (
    <>
    <Header title='Refeição' onDiet={meal.diet} redirectTo={goHome} />
    <Content>
      <Info>
        <InfoMealCard title={meal.name} description={meal.description}/>
        <InfoDateCard title='Data e Hora' day={meal.day} hour={meal.hour}/>
        <InfoTag onDiet={meal.diet}/>
      </Info>
      <ButtonBox>
      <ButtonEdit text='Editar Refeição' type='PRIMARY' value={goEditMeal}/>
      <ButtonRemove text='Remover Refeição' type='REMOVE' value={handleRemoveMeal}/>
      </ButtonBox>
    </Content>
    </>
  );
}