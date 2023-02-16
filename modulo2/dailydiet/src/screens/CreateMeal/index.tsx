import { useState } from 'react';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

import { mealCreate } from '@storage/Meal/mealCreate';
import { mealStorageDTO } from '@storage/Meal/mealStorageDTO';

import { Content, DayHourView, Form, SelectRow, SelectView } from './styles';
import { Header } from '@components/Header';
import { InputName } from '@components/Input/InputName';
import { InputDescription } from '@components/Input/InputDescription';
import { InputDay } from '@components/Input/InputDay';
import { InputHour } from '@components/Input/InputHour';
import { DietLabel } from '@components/Input/styles';
import { SelectGreen } from '@components/Select/SelectGreen';
import { SelectRed } from '@components/Select/SelectRed';

import dayjs from 'dayjs';

export default function CreateMeal() {
  const [mealName,setMealName] = useState<string>('');
  const [mealDescription,setMealDescription] = useState<string>('');
  const [mealDay,setMealDay] = useState<string>('');
  const [mealHour,setMealHour] = useState<string>('');
  const [mealDiet,setMealDiet] = useState<boolean>(false);

  const [isGreenSelected,setIsGreenSelected] =useState<boolean>(false);
  const [isRedSelected,setIsRedSelected] =useState<boolean>(false);

  const navigation = useNavigation();

  function handleAddMeal(){

   /* const meal = {
      name: mealName,
      description: mealDescription,
      day: mealDay,
      hour: mealHour,
      diet: mealDiet,
    }
    mealCreate(meal); 
    */
    navigation.navigate('success');
  }

  function SetHealthyMeal(){
    setIsGreenSelected(true);
    setIsRedSelected(false);
    setMealDiet(true) 
  }
  function SetUnhealthyMeal(){
    setIsRedSelected(true);
    setIsGreenSelected(false);
    setMealDiet(false);
  }

  return (
    <>
    <Header title='Nova Refeição'/>
      <Content>
        <Form>
          <InputName
          text='Name'
          onChangeText={setMealName}
          value={mealName}
          />        

          <InputDescription
            text='Descrição'
            onChangeText={setMealDescription}
            value={mealDescription}
          />

          <DayHourView>
            <InputDay
              text='Data'
              onChangeText={setMealDay}
              value={mealDay}
            />        
            <InputHour
              text='Hora'
              onChangeText={setMealHour}
              value={mealHour}
            />     
          </DayHourView>

          <SelectView>       
            <DietLabel>Está dentro da dieta?</DietLabel>
            <SelectRow>
              <SelectGreen text='Sim'  pressed={SetHealthyMeal} selected={isGreenSelected} />
              <SelectRed text='Não'  pressed={SetUnhealthyMeal} selected={isRedSelected} />         
            </SelectRow>
          </SelectView>  

        </Form>
        <Button value={handleAddMeal} type='PRIMARY' text='Cadastrar Refeição' />
      </Content>
    </>
  );
}