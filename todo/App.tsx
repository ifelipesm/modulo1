import { useFonts,Inter_400Regular,Inter_700Bold } from "@expo-google-fonts/inter";
import { StatusBar} from "react-native";
import { Loading } from "./src/components/Loading";
import {Home} from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts ({
    Inter_400Regular,
    Inter_700Bold,
  });
    if (!fontsLoaded){
    return(
      <Loading/>
    )}

    return (
      <>
        <StatusBar 
        barStyle="dark-content" 
        backgroundColor="transparent"
        translucent
        />
        <Home/>
      </>
    )
  }

