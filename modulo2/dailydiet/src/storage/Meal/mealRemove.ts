import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";
import { mealsGetByDay } from "./mealsGetByDay";
import { mealStorageDTO } from "./mealStorageDTO";


export async function mealRemove(removedMeal: mealStorageDTO) {
  try{

    const day = removedMeal.day;
    const hour = removedMeal.hour;

    const storedMeals = await mealsGetAll();
    const dayMeals = await mealsGetByDay(day);
    const filterDayHourMeals = dayMeals.filter(m => m.hour !== hour);
    const filterStoredMeals = storedMeals.filter(meal => meal.day !== day);
    const updatedMeals = [...filterStoredMeals,filterDayHourMeals];

    const updatedStorageData = JSON.stringify([...updatedMeals]);

    await AsyncStorage.setItem(`${MEAL_COLLECTION}`,updatedStorageData);
    
  }
  catch(error){
    throw error;
  }

}