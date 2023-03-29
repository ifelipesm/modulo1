import { StatusBar } from 'react-native';
import OneSignal from 'react-native-onesignal';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';

import { CartContextProvider } from './src/contexts/CartContext';
import { AppId } from './src/AppId';
import { tagUserCreate } from './src/notifications/notificationsTags';
import { useEffect } from 'react';

OneSignal.setAppId(AppId)

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  
  tagUserCreate();
  
  useEffect(()=>{
    const unsubscribe = OneSignal.setNotificationOpenedHandler((response)=>{
      const { actionId } = response.action as any;

      switch(actionId){
        case '1':
          return console.log('Aceitar');
        case '2':
          return console.log('Cancelar');
        default:
          return console.log('Indefinido')
      }
    })
    return () => unsubscribe;
  },[])


  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
     
    </NativeBaseProvider>
  );
}