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
        mealDiet: boolean;
        }
      show: { meal: mealStorageDTO}
    }
  }
}