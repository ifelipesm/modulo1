import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealStorageDTO } from "./mealStorageDTO";

export async function mealsGetByDiet(diet: boolean){
  try{
    const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}`);

    const meals: mealStorageDTO[] = storage ? JSON.parse(storage) : [];
    
    const dietMeals = meals.filter((item) => item.diet === diet);

    return dietMeals;
  }
  catch(error){
    throw error;
  }
}