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

  function goEditMeal(){
    navigation.navigate('edit');
  }

  useEffect(()=>{
    fetchData();
    getDietPercentage();
  },[]);
  
  return (
    <>
      <HomeHeader />
      <Percent number={percentage} />
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
                  <MealCard hour={item.hour} meal={item.name} diet={item.diet} onRedirect={goEditMeal}/>
                )}
                renderSectionHeader={({section: {title}}) => (
                  <SectionTitle>{title}</SectionTitle>
                )}
              />
            }
      </Meals>
    </>
  );
}