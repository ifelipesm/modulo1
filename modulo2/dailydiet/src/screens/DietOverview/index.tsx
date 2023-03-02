import { useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Alert, SectionList } from 'react-native';

import { Container, LabelNew, ListFooter, Meals, NewContainer, SectionTitle } from './styles';
import { ButtonNew } from '@components/Button/ButtonNew';
import { HomeHeader } from '@components/HomeHeader';
import { MealCard } from '@components/MealCard';
import { Percent } from '@components/Percent';
import { mealsGetAll } from '@storage/Meal/mealsGetAll';
import { mealStorageDTO } from '@storage/Meal/mealStorageDTO';
import { mealsGetByDiet } from '@storage/Meal/mealsGetByDiet';
import {transformListInSectionList} from '@utils/transformListInSectionList';
import { getDietSequence } from '@utils/getDietSequence';

export function DietOverview() {

  const [meals,setMeals] = useState<mealStorageDTO[]>([]);
  const [percentage,setPercentage] = useState<number>(0);
  const [textPercentage,setTextPercentage] = useState<string>('0');
  const [sequenceAmount,setSequenceAmount] = useState<number>(0);
  const [totalAmount,setTotalAmount] = useState<number>(0);
  const [onDietAmount,setOnDietAmount] = useState<number>(0);
  const [outOfDietAmount,setOutOfDietAmount] = useState<number>(0);
  
  const navigation = useNavigation();
  const DATA = transformListInSectionList(meals);

  async function fetchData(){
    try{
      //storageClear(); -> testing only
      const mealsData = await mealsGetAll();
      setMeals(mealsData);
    }
    catch(error){
      console.log(error);
      Alert.alert('Refeição', 'Não foi possível exibir a lista de refeições.');
    }
  }

  async function setStatistics(){
    try{
    const totalMeals = await mealsGetAll();
    const dietMeals = await mealsGetByDiet(true);
    const outOfDietMeals = await mealsGetByDiet(false);
    const sequenceValue = await getDietSequence(meals);
    
    setOnDietAmount(dietMeals.length);
    setOutOfDietAmount(outOfDietMeals.length);
    setTotalAmount(totalMeals.length);
    setSequenceAmount(sequenceValue);
    }
    catch(error){
      Alert.alert('Erro - Estatísticas','Não foi possível exibir as estatísticas.');
    }
  }

  async function getDietPercentage(){
      try  {     
        const result = Math.round(((onDietAmount/totalAmount)*100)).toFixed(2);
        setTextPercentage(result.trim().replace('.',','));
        setPercentage(+result)
    }
    catch(error){
      console.log(error);
      Alert.alert('Porcentagem', 'Não foi possível exibir a porcentagem de refeições na dieta.');
    }
  }
    
  function goNewMeal(){
    navigation.navigate('new');
  }

  function goShowMeal(meal: mealStorageDTO){
    navigation.navigate('show',{meal});
  }

  function goStatistics(){
    const statistics = {
          percentageText: textPercentage,
          percentageValue: percentage,
          sequence: sequenceAmount,
          total: totalAmount,
          diet: onDietAmount,
          outOfDiet: outOfDietAmount,
    }
    navigation.navigate('stats',{statistics});
  }

  useFocusEffect(()=>{
    fetchData();
    setStatistics();
    getDietPercentage();
  });
  
  return (
    <>
      <HomeHeader />
      <Percent number={percentage} text={textPercentage} redirect={goStatistics}/>
      <Meals>
        <NewContainer>
          <LabelNew>Refeições</LabelNew>
          <ButtonNew title='Nova Refeição' redirect={goNewMeal} />
        </NewContainer>
        <Container>
          {
            <SectionList
              stickyHeaderHiddenOnScroll={true}
              stickySectionHeadersEnabled={false}
              sections={DATA}
              keyExtractor={(item,index) => item+index.toString()}
              ListFooterComponent={
              <ListFooter></ListFooter>
              }
              renderSectionHeader={({section: {title}}) => (
                <SectionTitle>{title}</SectionTitle>
              )}
              renderItem={({item}) => (
                <MealCard hour={item.hour} meal={item.name} diet={item.diet} onRedirect={()=>goShowMeal(item)}/>
              )}
              ListEmptyComponent={
                <></>
              }
            />
          }
        </Container>
      </Meals>
    </>
  );
}
