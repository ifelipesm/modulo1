import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealStorageDTO } from "./mealStorageDTO";

export async function mealGetByDiet(diet: boolean){
  try{
    const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}-${diet}`);

    const meals: mealStorageDTO[] = storage ? JSON.parse(storage) : [];

    return meals;
  }
  catch(error){
    throw error;
  }
}