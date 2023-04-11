import { Loading } from "@components/Loading";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Box, useTheme } from "native-base";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "@hooks/useAuth";

export function Routes(){
  const {colors} = useTheme();
  const {user,isLoadingUserStorageData } = useAuth();
  
  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  console.log("Dados da requisição -> ",user);


  if(isLoadingUserStorageData){
    return <Loading />
  }
  
  return (
    <Box flex={1} bg="gray.700">
    <NavigationContainer theme={theme}  >
    {user.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
    </Box>
  )
}