import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Routes } from "@routes/index";
import { Loading } from "@components/Loading";
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native'

import theme from  './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({  Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider  theme={theme}>
      <StatusBar
      barStyle={"dark-content"}
      backgroundColor="transparent"
      translucent={true}  
      />
    { fontsLoaded ? 
    <Routes/>
    : <Loading/> }
    </ThemeProvider>
  );
}

