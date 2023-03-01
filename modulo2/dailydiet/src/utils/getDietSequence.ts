import { mealStorageDTO } from "@storage/Meal/mealStorageDTO";

export async function getDietSequence(meals: mealStorageDTO[]){
  let count = 0;
  let record = 0;
    meals.map(meal => {
      if(meal.diet === true){
        count++;
        if(count > record){
          record = count;
        }
      }
      if(meal.diet === false){
        if(count > record){
          record = count;
        }
        count = 0;
      }
    })
    return record;
}