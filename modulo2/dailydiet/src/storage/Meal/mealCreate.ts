import AsyncStorage from "@react-native-async-storage/async-storage";
import { NewMeal } from "@screens/NewMeal";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { mealsGetByDay } from "./mealsGetByDay";
import { mealsGetAll } from "./mealsGetAll";
import { mealStorageDTO } from "./mealStorageDTO";
import { orderMealsDesc } from "@utils/orderMealsDesc";


export async function mealCreate(newMeal: mealStorageDTO) {
  try{

    const day = newMeal.day;
    const hour = newMeal.hour;

    const storedMeals = await mealsGetAll();
    const storedMealsByDay = await mealsGetByDay(day);
    const mealAlreadyRegistered = storedMealsByDay.filter( meal => meal.hour === hour);

    if(mealAlreadyRegistered.length > 0){
      throw new AppError("Já existe uma refeição cadastrada neste dia e horário.");
    }

    const meals = [...storedMeals,newMeal];

    const orderedMeals = orderMealsDesc(meals);

    const newStorageData = JSON.stringify([...meals]);
  
    await AsyncStorage.setItem(`${MEAL_COLLECTION}`,newStorageData);

    
  }
  catch(error){
    throw error;
  }

}