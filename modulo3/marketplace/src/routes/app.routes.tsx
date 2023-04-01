import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeSvg from '@assets/home.svg'
import AdsSvg from '@assets/ads.svg'
import LogoutSvg from '@assets/logout.svg'

import { Home } from "@screens/Home";
import { useTheme } from "native-base";
import { Platform } from "react-native";
import { MyAds } from "@screens/MyAds";
import { AdCreate } from "@screens/AdCreate";
import { AdEdit } from "@screens/AdEdit";
import { AdPreview } from "@screens/AdPreview";
import { AdDetails } from "@screens/AdDetails";
import { SignIn } from "@screens/SignIn";

type AppRoutes = {
  home: undefined;
  myads: undefined;
  adcreate: undefined;
  addetails: undefined;
  adpreview: undefined;
  adedit: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(){

  const { sizes,colors } = useTheme();

  const iconSize = sizes[6];

  return (
    <Navigator screenOptions={{
      headerShown:false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.green[500],
      tabBarInactiveTintColor: colors.gray[200],
      tabBarStyle: {
        backgroundColor: colors.gray[600],
        borderTopWidth: 0,
        height: Platform.OS === 'android' ? 'auto' : 96,
        paddingBottom: sizes[10],
        paddingTop: sizes[6]
      }
    }} >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />
      <Screen
        name="myads"
        component={MyAds}
        options={{
          tabBarIcon: ({color}) => (
            <AdsSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />
      <Screen
        name="logout"
        component={SignIn}
        options={{
          tabBarIcon: ({color}) => (
            <LogoutSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />
      <Screen
        name="adcreate"
        component={AdCreate}
        options={{tabBarButton: () => null}}
      />
      <Screen
        name="adedit"
        component={AdEdit}
        options={{tabBarButton: () => null}}
      />
      <Screen
        name="adpreview"
        component={AdPreview}
        options={{tabBarButton: () => null}}
      />
      <Screen
        name="addetails"
        component={AdDetails}
        options={{tabBarButton: () => null}}
      />
    </Navigator>
  )
}