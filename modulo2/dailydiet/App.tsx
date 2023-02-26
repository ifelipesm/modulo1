import { ThemeProvider } from 'styled-components';
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans'
import theme from '@theme/index';
import { StatusBar } from 'react-native';
import { Loading } from '@components/Loading';
import { Routes } from "@routes/index";


export default function App() {
  const [fontsLoaded] = useFonts({  NunitoSans_400Regular, NunitoSans_700Bold });

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
};
