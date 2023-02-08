import { Groups } from "@screens/Groups";
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import theme from  './src/theme';
import { ActivityIndicator, StatusBar } from 'react-native'
import { Loading } from "@components/Loading";
import { Header } from "@components/Header";


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
    <>
    <Groups/> 
    
    </>
    : <Loading/> }
    </ThemeProvider>
  );
}

