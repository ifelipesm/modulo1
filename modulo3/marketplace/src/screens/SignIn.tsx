import { Box, Center, ScrollView, Text, VStack} from "native-base";
import LogoSvg from '@assets/logo.svg'
import { Input } from "@components/Input";
import { Button } from "@components/Button";


export function SignIn(){
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
              keyboardType="email-address"
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
        <Center mx="12" mt="16">
            <Text color="gray.200" fontSize="md" fontFamily="body" mb={4} >
              Ainda não tem acesso?
            </Text>
            <Button mt="4" mb="20" title="Criar uma conta" variant="gray" />
        </Center>

      </VStack>
    
    </ScrollView>

  )
}