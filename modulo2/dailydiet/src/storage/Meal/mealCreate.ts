import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";
import { mealStorageDTO } from "./mealStorageDTO";


export async function mealCreate(newMeal: mealStorageDTO) {
  try{
    const storedMeals = await mealsGetAll();

    const newStorageData = JSON.stringify([...storedMeals,newMeal]);

    await AsyncStorage.setItem(MEAL_COLLECTION,newStorageData);
  }
  catch(error){
    throw error;
  }

}