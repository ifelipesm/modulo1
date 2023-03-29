import { useTheme } from 'native-base';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { useEffect, useState } from 'react';
import OneSignal, { NotificationReceivedEvent, OSNotification } from 'react-native-onesignal';
import { Notification } from '../components/Notification';

const linking = {
  prefixes: ['igniteshoesapp://','com.rocketseat.igniteshoes://','exp-igniteshoesapp://'],
  config: {
    screens: {
      details: {
        path: 'details/:productId',
        parse: {
          productId: (productId: string) => productId
        }
      }
    }
  }
}

export function Routes() {
  const [notification,setNotification] = useState<OSNotification>();
  
  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  useEffect(() => {
    const unsubscribe = OneSignal.setNotificationWillShowInForegroundHandler((NotificationReceivedEvent: NotificationReceivedEvent) => 
    {
      const response = NotificationReceivedEvent.getNotification();
      setNotification(response);
    })
    return () => unsubscribe;
  },[])
  return (
    <NavigationContainer theme={theme} linking={linking}>
      <AppRoutes />
      
      {         
        notification?.title &&
        <Notification 
        data={notification} 
        onClose={ ()  =>   setNotification(undefined) } /> 
      }
    </NavigationContainer>
  );
}