import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEAL_COLLECTION } from "@storage/storageConfig"
import { mealStorageDTO } from "./mealStorageDTO";


export async function mealGetByDay(day:string){
  try{
    const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}-${day}`);
    
    const meals: mealStorageDTO[] = storage ? JSON.parse(storage) : [];

    return meals;
  }
  catch(error){
    throw error;
  }
}