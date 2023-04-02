import { Box, Center, ScrollView, Text, VStack} from "native-base";
import LogoSvg from '@assets/logo.svg'
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { AuthFooter } from "@components/AuthFooter";


type FormData = {
  email: string;
  password: string;
}

export function SignIn(){

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount(){
    navigation.navigate('signUp');
  }

  return(
    <ScrollView 
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{flexGrow: 1}}>

      <VStack flex={1} >
        <Box  bg="gray.600" flex={1} borderRadius="3xl" >
          <Center my="24" mx="12" >
            <LogoSvg/>
      
            <Center mt="20">
              <Text color="gray.200" fontSize="md" fontFamily="body" mb={4} >
                Acesse sua conta
              </Text>
              <Input
              placeholder="E-mail"
              autoCapitalize="none"
              />
              <Input
              placeholder="Password"
              secureTextEntry
              autoCapitalize="none"
              />
            </Center> 
              <Button mt="8" title="Entrar" variant="blue" />
          </Center>
        </Box>
        <Box mx="12" mt="16">
          <AuthFooter action={handleNewAccount} label="Ainda não tem acesso?" title="Criar uma conta" />
        </Box>

      </VStack>
    
    </ScrollView>

  )
}