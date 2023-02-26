import { ButtonNew } from '@components/Button/ButtonNew';
import { HomeHeader } from '@components/HomeHeader';
import { MealCard } from '@components/MealCard';
import { Percent } from '@components/Percent';
import { useNavigation } from '@react-navigation/native';
import { mealsGetAll } from '@storage/Meal/mealsGetAll';
import { mealStorageDTO } from '@storage/Meal/mealStorageDTO';
import { useEffect, useState } from 'react';
import { Alert, SectionList } from 'react-native';
import { LabelNew, Meals, NewContainer, SectionTitle } from './styles';
import { storageClear } from '@storage/storageClear';
import { mealsGetByDiet } from '@storage/Meal/mealsGetByDiet';

export function DietOverview() {
  const [meals,setMeals] = useState<mealStorageDTO[]>([]);
  const [percentage,setPercentage] = useState<number>(0);
  const [sequenceAmount,setSequenceAmount] = useState<number>(0);
  const [totalAmount,setTotalAmount] = useState<number>(0);
  const [onDietAmount,setOnDietAmount] = useState<number>(0);
  const [outOfDietAmount,setOutOfDietAmount] = useState<number>(0);
  
  const navigation = useNavigation();
  
  
  const DATA = transformListInSectionList(meals);

   function transformListInSectionList(meals: mealStorageDTO[]) {
    const arrayCompared = meals.reduce((acc: any, meal) => {
      if (!acc[meal.day]) {
        acc[meal.day] = [];
      }
      acc[meal.day].push(meal);
      return acc;
    }, {});

    const sectionListData = Object.keys(arrayCompared).map((item) => {
      const data = arrayCompared[item];
      return {
        title: item,
        data,
      };
    });

    return sectionListData;
  }

  async function fetchData(){
    try{
      //storageClear();
      const mealsData = await mealsGetAll();
      setMeals(mealsData);
    }
    catch(error){
      console.log(error);
      Alert.alert('Refeição', 'Não foi possível exibir a lista de refeições.');
    }
  }

  async function setStatistics(){
    const totalMeals = await mealsGetAll();
    const dietMeals = await mealsGetByDiet(true);
    const outOfDietMeals = await mealsGetByDiet(false);
    setOnDietAmount(dietMeals.length);
    setOutOfDietAmount(outOfDietMeals.length);
    setTotalAmount(totalMeals.length);
  }

  async function getDietPercentage(){
      try  {     
        const totalMeals = await mealsGetAll();
        const dietMeals = await mealsGetByDiet(true);
        const percentageValue = Math.round((dietMeals.length/totalMeals.length)*100);
        setPercentage(percentageValue)
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
          percentageValue: percentage,
          sequence: 0,
          total: totalAmount,
          diet: onDietAmount,
          outOfDiet: outOfDietAmount,
    }
    navigation.navigate('stats',{statistics});
  }

  useEffect(()=>{
    fetchData();
    getDietPercentage();
    setStatistics();
  },[]);
  
  return (
    <>
      <HomeHeader />
      <Percent number={percentage} redirect={goStatistics}/>
      <Meals>
        <NewContainer>
          <LabelNew>Refeições</LabelNew>
          <ButtonNew title='Nova Refeição' redirect={goNewMeal} />
        </NewContainer>
            {
              <SectionList
                sections={DATA}
                keyExtractor={(item,index) => item+index.toString()}
                renderItem={({item}) => (
                  <MealCard hour={item.hour} meal={item.name} diet={item.diet} onRedirect={()=>goShowMeal(item)}/>
                )}
                renderSectionHeader={({section: {title}}) => (
                  <SectionTitle>{title}</SectionTitle>
                )}
                ListEmptyComponent={
                  <></>
                }
              />
            }
      </Meals>
    </>
  );
}