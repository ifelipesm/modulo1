import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {  NewMeal }  from '@screens/NewMeal';
import { NewMealSuccess } from '@screens/NewMealSuccess';
import { DietOverview } from '@screens/DietOverview';
import { DietStats } from '@screens/DietStats';
import { EditMeal } from '@screens/EditMeal';
import { ShowMeal } from '@screens/ShowMeal';


const { Navigator,Screen } = createNativeStackNavigator();

export function AppRoutes(){

  return(
    <Navigator  screenOptions={{headerShown:false}}>
      <Screen
        name="new"
        component={NewMeal}
      />
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
        name="success"
        component={NewMealSuccess}
      />
      <Screen
        name="show"
        component={ShowMeal}
      />
    </Navigator>
  )
}