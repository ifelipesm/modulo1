import { mealStorageDTO } from "@storage/Meal/mealStorageDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      new: undefined;
      overview: undefined; 
      stats: {
        statistics: {
          percentageText: string,
          percentageValue: number,
          sequence:number,
          total: number,
          diet: number,
          outOfDiet: number,
        }
      }
      edit: { meal: mealStorageDTO};
      success: {
        meal: {
          name: mealName,
          description: mealDescription,
          day: mealDay,
          hour: mealHour,
          diet: mealDiet,
        }
        }
      show: { meal: mealStorageDTO}
    }
  }
}