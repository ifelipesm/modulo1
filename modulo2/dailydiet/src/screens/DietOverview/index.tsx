import { Button } from '@components/Button';
import { ButtonNew } from '@components/Button/ButtonNew';
import { HomeHeader } from '@components/HomeHeader';
import { MealCard } from '@components/MealCard';
import { Percent } from '@components/Percent';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SectionList } from 'react-native';
import { LabelNew, Meals, NewContainer, SectionTitle } from './styles';

export function DietOverview() {
  const Healthyness = 80.33;
  const mealDay = '16.02.23';

  const navigation = useNavigation();



  function goNewMeal(){
    navigation.navigate('new');
  }

  return (
    <>
      <HomeHeader />
      <Percent number={Healthyness} />
      <Meals>
        <NewContainer>
          <LabelNew>Refeições</LabelNew>
          <ButtonNew title='Nova Refeição' redirect={goNewMeal} />
        </NewContainer>
        <SectionTitle>{mealDay}</SectionTitle>
        <MealCard hour='10:00' meal='Café da manhã com muito...' diet={true} />
        <MealCard hour='09:00' meal='Café da manhã com muito...' diet={false} />
        <MealCard hour='08:00' meal='Café da manhã com muito...' diet={true} />
        <SectionTitle>{mealDay}</SectionTitle>
        <MealCard hour='10:00' meal='Café da manhã com muito...' diet={true} />
        <MealCard hour='09:00' meal='Café da manhã com muito...' diet={false} />
        <MealCard hour='08:00' meal='Café da manhã com muito...' diet={true} />
      </Meals>
    </>
  );
}