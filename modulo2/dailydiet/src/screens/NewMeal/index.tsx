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
import { storageClear } from '@storage/storageClear';
import { validateDates } from '@utils/validateDates';



export function NewMeal() {

  const todayDay = dayjs(new Date).format('DD/MM/YYYY').toString();
  const todayHour = dayjs(new Date).format('HH:mm').toString();

  const [mealName,setMealName] = useState<string>('');
  const [mealDescription,setMealDescription] = useState<string>('');
  const [mealDay,setMealDay] = useState<string>(todayDay);
  const [mealHour,setMealHour] = useState<string>(todayHour);
  const [mealDiet,setMealDiet] = useState<boolean>(false);
  const [isDisabled,setIsDisabled] = useState<boolean>(false);

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

  function clearFields(){
    newMealNameInputRef.current?.clear();
    newMealDescriptionInputRef.current?.clear();
    newMealDayInputRef.current?.clear();
    newMealHourInputRef.current?.clear();
    setIsGreenSelected(false);
    setIsRedSelected(false);
    setMealDiet(false);
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
      if(!checkEmptyInputs()){    
        if(validateDates(meal.day,meal.hour) === true){ 
          await mealCreate(meal);
          clearFields();
          navigation.navigate('success',{mealDiet});
        }
        else{
          Alert.alert("Falha no cadastro","Insira um formato de data/hora válido. Ex: DD/MM/YYYY e HH:mm");
          throw new AppError("Formato de datas inválido.");
        }
      }
      else{
      Alert.alert("Falha no Cadastro","Preencha todos os campos");
      throw new AppError("Os campos não foram preenchidos.");
      }
    }
    catch(error){
      Alert.alert("Falha no Cadastro","Não foi possível criar a refeição.");
      throw new AppError("Não foi possível criar a refeição.")
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



  function checkEmptyInputs(){
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

  useFocusEffect(() => {
    checkEmptyInputs();
  })

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
              blurOnSubmit
              onSubmitEditing={setDayInputRef} 
              returnKeyType="done"  
              keyboardType='numbers-and-punctuation'
            />        
            <InputHour
              text='Hora'
              placeholder="00:00" 
              inputRef={newMealHourInputRef} 
              onChangeText={setMealHour}
              value={mealHour}
              onSubmitEditing={setHourInputRef} 
              returnKeyType="done"
              keyboardType='numbers-and-punctuation'
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
          <ButtonCreate action={handleAddMeal} disabled={isDisabled} type='PRIMARY' text='Cadastrar Refeição' />
        </ButtonView>
      </Content>
    </>
  );
}