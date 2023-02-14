export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      createMeal: undefined;
      overview: { 
        meal: {
          name: string;
          description: string;
          day: string;
          hour: string;
          diet: boolean;
        }
      }
      stats: undefined;
      edit: undefined;
      success: undefined;
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
}