import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEAL_COLLECTION } from "@storage/storageConfig"
import { mealStorageDTO } from "./mealStorageDTO";


export async function mealsGetByDay(day:string){
  try{
    const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}`);
    
    const meals: mealStorageDTO[] = storage ? JSON.parse(storage) : [];

    const storageMealsByDay = meals.filter(m => m.day === day);

    return storageMealsByDay;
  }
  catch(error){
    throw error;
  }
}