import { Button } from '@components/Button';
import { ButtonNew } from '@components/Button/ButtonNew';
import { HomeHeader } from '@components/HomeHeader';
import { MealCard } from '@components/MealCard';
import { Percent } from '@components/Percent';
import { useNavigation } from '@react-navigation/native';
import { mealGetByDay } from '@storage/Meal/mealGetByDay';
import { mealsGetAll } from '@storage/Meal/mealsGetAll';
import { mealStorageDTO } from '@storage/Meal/mealStorageDTO';
import { useEffect, useState } from 'react';
import { Alert, SectionList } from 'react-native';
import { LabelNew, Meals, NewContainer, SectionTitle } from './styles';



export function DietOverview() {
  const [meals,setMeals] = useState<mealStorageDTO[]>([]);
  const [days,setDays] = useState<string>('');
  const [hours,setHours] = useState<string>('');
  const [names,setNames] = useState<string>('');
  const [diets,setDiets] = useState<boolean>(false);
  const Healthyness = 80.33;
  const mealDay = '16.02.23';

  const navigation = useNavigation();

  const DATA = [ 
    {
      title: days,
      data: [
        {
          hour: hours,
          name: names,
          diet: diets,
        }
      ],
    }
  ];

  async function fetchData(){
    try{
      const meals = await mealsGetAll();
      setMeals(meals);

      meals.map(meal => {
       setDays(meal.day);
       setHours(meal.hour);
       setNames(meal.name);
       setDiets(meal.diet);
      })
    }
    catch(error){
      console.log(error);
      Alert.alert('Refeição', 'Não foi possível exibir a lista de refeições.');
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
  },[]);

  return (
    <>
      <HomeHeader />
      <Percent number={Healthyness} />
      <Meals>
        <NewContainer>
          <LabelNew>Refeições</LabelNew>
          <ButtonNew title='Nova Refeição' redirect={goNewMeal} />
        </NewContainer>
        { meals.map(meal => 
          <SectionList
          sections={DATA}
          keyExtractor={(item,index) => item+index.toString()}
          renderItem={({item}) => (
            <MealCard hour={meal.hour} meal={meal.name} diet={meal.diet} onRedirect={goEditMeal}/>
          )}
          renderSectionHeader={({section: {title}}) => (
            <SectionTitle>{meal.day}</SectionTitle>
          )}
        />
        )
        }

      </Meals>
    </>
  );
}