import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeSvg from '@assets/home.svg'
import AdsSvg from '@assets/ads.svg'

import { Home } from "@screens/Home";
import { Box, Center, useTheme } from "native-base";
import { Platform } from "react-native";
import { MyAds } from "@screens/MyAds";
import { AdCreate } from "@screens/AdCreate";
import { AdEdit } from "@screens/AdEdit";
import { AdPreview } from "@screens/AdPreview";
import { AdDetails } from "@screens/AdDetails";
import { useAuth } from "@hooks/useAuth";
import { TabBarLogout } from "@components/TabBarLogout";
import LogoutSvg from '@assets/logout.svg'


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

  const { signOut } = useAuth();

  return (
    <Navigator screenOptions={{
      headerShown:false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.gray[200],
      tabBarInactiveTintColor: colors.gray[400],
      tabBarStyle: {
        backgroundColor: colors.gray[700],
        borderTopWidth: 0,
        height: Platform.OS === 'android' ? 'auto' : 96,
        paddingBottom: sizes[8],
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
        component={Home}
        options={{
          tabBarIcon: () => (
              <TabBarLogout  iconSize={iconSize} onLogout={signOut} />
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