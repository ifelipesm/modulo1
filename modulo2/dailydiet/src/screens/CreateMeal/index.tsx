import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { mealCreate } from '@storage/Meal/mealCreate';
import { mealStorageDTO } from '@storage/Meal/mealStorageDTO';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Content, Form } from './styles';



export function CreateMeal() {
  const [mealName,setMealName] = useState<string>('');
  const [mealDescription,setMealDescription] = useState<string>('');
  const [mealDay,setMealDay] = useState<string>('');
  const [mealHour,setMealHour] = useState<string>('');
  const [mealDiet,setMealDiet] = useState<boolean>(false);

  const navigation = useNavigation();

  function handleAddMeal(){

    const meal = {
      name: mealName,
      description: mealDescription,
      day: mealDay,
      hour: mealHour,
      diet: mealDiet,
    }
    mealCreate(meal);
    navigation.navigate('success');
  }

  return (
    <>
    <Header title='Nova Refeição'/>
    
      <Content>
        <Form>
      
          <Input
          label='Name'
          onChangeText={setMealName}
          value={mealName}
          />
          <Input
          label='Descrição'
          onChangeText={setMealDescription}
          value={mealDescription}
          />
          <Input
          label='Data'
          onChangeText={setMealDay}
          value={dayjs(mealDay).format('DD-MM-YYYY')}
          />
          <Input
          label='Hora'
          onChangeText={setMealHour}
          value={dayjs(mealHour).format('HH-MM-SS')}
          />
          <Input
          label='Está dentro da dieta?'
          />


        </Form>
        <Button type='PRIMARY' text='Cadastrar Refeição' onPress={handleAddMeal}/>
      </Content>
    </>
  );
}