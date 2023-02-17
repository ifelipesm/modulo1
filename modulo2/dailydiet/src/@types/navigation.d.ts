import { mealStorageDTO } from "@storage/Meal/mealStorageDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      new: undefined;
      overview: undefined; 
      stats: undefined;
      edit: undefined;
      success: {
        meal: {
          name: mealName,
          description: mealDescription,
          day: mealDay,
          hour: mealHour,
          diet: mealDiet,
        }
        }
      }
      show: {
        meal: {
          name: string;
          description: string;
          day: string;
          hour: string;
          diet: boolean;
        }
      }
    }
  }