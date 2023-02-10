import { Groups } from "@screens/Groups";

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NewGroup } from "@screens/NewGroup";
import { Players } from "@components/Players";

const { Navigator,Screen } = createNativeStackNavigator();

export function AppRoutes(){

  return(
    <Navigator  screenOptions={{headerShown:false}}>
      <Screen
        name="groups"
        component={Groups}
      />
      <Screen
        name="new"
        component={NewGroup}
      />
      <Screen
        name="players"
        component={Players}
      />
    </Navigator>
  )
}