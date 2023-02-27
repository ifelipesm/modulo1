import { useEffect, useRef, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

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

export function NewMeal() {
  const [mealName,setMealName] = useState<string>('');
  const [mealDescription,setMealDescription] = useState<string>('');
  const [mealDay,setMealDay] = useState<string>('');
  const [mealHour,setMealHour] = useState<string>('');
  const [mealDiet,setMealDiet] = useState<boolean>(false);

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
  
  async function handleAddMeal(){
    try{    

      const meal = {
        name: mealName,
        description: mealDescription,
        day: mealDay,
        hour: mealHour,
        diet: mealDiet,
      };
      if(checkEmptyInput()  !== true){
        await mealCreate(meal);
        navigation.navigate('success',{meal});
      }
      else
      Alert.alert('Erro no cadastro','Preencha todos os campos');
    }
    catch(error){
      Alert.alert('Erro no cadastro','Refeição já cadastrada.')
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

  function checkEmptyInput(){
    if((mealName || mealDescription || mealDay || mealHour === '') || (isGreenSelected && isRedSelected === false)){
      return true;
    }
    else{
    return false;
    }
  }

  function goHome(){
    navigation.navigate('overview');
  }

  return (
    <>
    <Header redirectTo={goHome} title='Nova Refeição'/>
      <Content>
        <Form>
          <InputName
          text='Nome'
          placeholder="Ex: Almoço" 
          inputRef={newMealNameInputRef}
          onChangeText={setMealName}
          value={mealName}
          onSubmitEditing={setNameInputRef} // submit on keyboard
          returnKeyType="done"  // return of submit on keyboard
          />        

          <InputDescription
            text='Descrição'
            placeholder="Descreva sua refeição" 
            inputRef={newMealDescriptionInputRef} 
            onChangeText={setMealDescription}
            value={mealDescription}
            onSubmitEditing={setDescriptionInputRef} 
            returnKeyType="done"  
          />

          <DayHourRow>
            <InputDay
              text='Data'
              placeholder="DD/MM/YYYY" 
              inputRef={newMealDayInputRef} 
              onChangeText={setMealDay}
              value={mealDay}
              onSubmitEditing={setDayInputRef} 
              returnKeyType="done"  
            />        
            <InputHour
              text='Hora'
              placeholder="00:00" 
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
          <ButtonCreate action={handleAddMeal} type='PRIMARY' text='Cadastrar Refeição' />
        </ButtonView>
      </Content>
    </>
  );
}