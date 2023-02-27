import { useRef, useState } from 'react';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import { mealCreate } from '@storage/Meal/mealCreate';
import { mealStorageDTO } from '@storage/Meal/mealStorageDTO';

import { ButtonView, Content, DayHourRow, Form, SelectRow, SelectView } from './styles';
import { Header } from '@components/Header';
import { InputName } from '@components/Input/InputName';
import { InputDescription } from '@components/Input/InputDescription';
import { InputDay } from '@components/Input/InputDay';
import { InputHour } from '@components/Input/InputHour';
import { DietLabel } from '@components/Input/styles';
import { SelectGreen } from '@components/Select/SelectGreen';
import { SelectRed } from '@components/Select/SelectRed';

import dayjs from 'dayjs';
import { Alert, TextInput } from 'react-native';
import { ButtonCreate } from '@components/Button/ButtonCreate';
import { AppError } from '@utils/AppError';
import { mealRemove } from '@storage/Meal/mealRemove';

  type routeParams = {
    meal: mealStorageDTO;
  }

export function EditMeal() {
  
  const route = useRoute();
  const { meal } = route.params as routeParams

  const [mealName,setMealName] = useState<string>(meal.name);
  const [mealDescription,setMealDescription] = useState<string>(meal.description);
  const [mealDay,setMealDay] = useState<string>(meal.day);
  const [mealHour,setMealHour] = useState<string>(meal.hour);
  const [mealDiet,setMealDiet] = useState<boolean>(meal.diet);

  const [isGreenSelected,setIsGreenSelected] =useState<boolean>(false);
  const [isRedSelected,setIsRedSelected] =useState<boolean>(false);

  const navigation = useNavigation();

  const newMealNameInputRef = useRef<TextInput>(null);
  const newMealDescriptionInputRef = useRef<TextInput>(null);
  const newMealDayInputRef = useRef<TextInput>(null);
  const newMealHourInputRef = useRef<TextInput>(null);

  function setNameInputRef(){
    setMealName(mealName);
    newMealNameInputRef.current?.blur();
  }
  function setDescriptionInputRef(){
    setMealDescription(mealDescription);
    newMealDescriptionInputRef.current?.blur();
  }
  function setDayInputRef(){
    setMealDay(mealDay);
    newMealDayInputRef.current?.blur();
  }
  function setHourInputRef(){
    setMealHour(mealHour);
    newMealHourInputRef.current?.blur();
  }
  
  async function handleUpdateMeal(){
    try{    

      const updatedMeal = {
        name: mealName,
        description: mealDescription,
        day: mealDay,
        hour: mealHour,
        diet: mealDiet,
      };
      if(!checkEmptyInput()){
        await mealRemove(meal);
        await mealCreate(updatedMeal);
        navigation.navigate('overview');
      }
      else
      Alert.alert('Erro no cadastro - campos','Preencha todos os campos');
    }
    catch(error){
      Alert.alert('Erro no cadastro','Campos não preenchidos ou refeição já cadastrada.')
    }
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

  function checkSelectedInput(){
    if(mealDiet){
      SetHealthyMeal()
    }
    else if(!mealDiet){
      SetUnhealthyMeal()
    }
  }

  function checkEmptyInput(){
    if(mealName === "" || mealDescription === "" || mealDay === "" || mealHour === "" 
    || isGreenSelected === false && isRedSelected === false)
    {
      return true;
    }
    else{
    return false;
    }
  }

  function goHome(){
    navigation.navigate('overview');
  }

  useFocusEffect(()=>{
    checkSelectedInput();
    checkEmptyInput();
  })

  return (
    <>
    <Header redirectTo={goHome} title='Editar Refeição'/>
      <Content>
        <Form>
          <InputName
          text='Name'
          inputRef={newMealNameInputRef} 
          onChangeText={setMealName}
          value={mealName}
          onSubmitEditing={setNameInputRef} // submit on keyboard
          returnKeyType="done"  // return of submit on keyboard
          />        

          <InputDescription
            text='Descrição'
            inputRef={newMealDescriptionInputRef} 
            onChangeText={setMealDescription}
            value={mealDescription}
            onSubmitEditing={setDescriptionInputRef} 
            returnKeyType="done"  
          />

          <DayHourRow>
            <InputDay
              text='Data'
              inputRef={newMealDayInputRef} 
              onChangeText={setMealDay}
              value={mealDay}
              onSubmitEditing={setDayInputRef} 
              returnKeyType="done"  
            />        
            <InputHour
              text='Hora'
              inputRef={newMealHourInputRef} 
              onChangeText={setMealHour}
              value={mealHour}
              onSubmitEditing={setHourInputRef} 
              returnKeyType="done"  
            />     
          </DayHourRow>

          <SelectView>       
            <DietLabel>Está dentro da dieta?</DietLabel>
            <SelectRow>
              <SelectGreen text='Sim'  pressed={SetHealthyMeal} selected={isGreenSelected} />
              <SelectRed text='Não'  pressed={SetUnhealthyMeal} selected={isRedSelected} />         
            </SelectRow>
          </SelectView>  
          
        </Form>
        <ButtonView>
          <ButtonCreate action={handleUpdateMeal} type='PRIMARY' text='Atualizar Refeição' />
        </ButtonView>
      </Content>
    </>
  );
}