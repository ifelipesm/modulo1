import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { orderMealsDesc } from "@utils/orderMealsDesc";
import { mealsGetAll } from "./mealsGetAll";
import { mealsGetByDay } from "./mealsGetByDay";
import { mealStorageDTO } from "./mealStorageDTO";


export async function mealRemove(removedMeal: mealStorageDTO) {
  try{

    const day = removedMeal.day;
    const hour = removedMeal.hour;

    const storedMeals = await mealsGetAll();
    const removeByDay = storedMeals.filter(meal => meal.day !== day);
    const filterByDay = storedMeals.filter(meal => meal.day === day);
    const filterByHour = filterByDay.filter(meal => meal.hour !== hour);
    
    const updatedMeals = removeByDay.concat(filterByHour);

    orderMealsDesc(updatedMeals);

    const updatedStorageData = JSON.stringify([...updatedMeals]);
    await AsyncStorage.setItem(`${MEAL_COLLECTION}`,updatedStorageData);
  }
  catch(error){
    throw error;
  }

}