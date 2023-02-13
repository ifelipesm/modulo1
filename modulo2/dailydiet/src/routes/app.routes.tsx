import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CreateMeal } from '@screens/CreateMeal';
import { CreateMealSuccess } from '@screens/CreateMealSuccess';
import { DietOverview } from '@screens/DietOverview';
import { DietStats } from '@screens/DietStats';
import { EditMeal } from '@screens/EditMeal';
import { ShowMeal } from '@screens/ShowMeal';


const { Navigator,Screen } = createNativeStackNavigator();

export function AppRoutes(){

  return(
    <Navigator  screenOptions={{headerShown:false}}>
      <Screen
        name="overview"
        component={DietOverview}
      />
      <Screen
        name="stats"
        component={DietStats}
      />
      <Screen
        name="edit"
        component={EditMeal}
      />
      <Screen
        name="createMeal"
        component={CreateMeal}
      />
      <Screen
        name="success"
        component={CreateMealSuccess}
      />
      <Screen
        name="show"
        component={ShowMeal}
      />
    </Navigator>
  )
}