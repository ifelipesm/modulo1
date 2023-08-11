import { NativeBaseProvider, StatusBar } from "native-base";
import { Karla_400Regular, Karla_700Bold, useFonts } from '@expo-google-fonts/karla'
import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";
import { THEME } from "@theme/index";
import { AuthContextProvider } from "@contexts/AuthContext";
import { ProductContextProvider } from "@contexts/ProductContext";

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold})
  
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      <AuthContextProvider>
        <ProductContextProvider>
          {fontsLoaded ? <Routes/> : <Loading/>}
        </ProductContextProvider>
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}

