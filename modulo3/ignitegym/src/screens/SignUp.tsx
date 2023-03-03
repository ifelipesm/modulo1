import { VStack,Image,Text ,Center, Heading, ScrollView } from "native-base";
import BackgroundImg  from '@assets/background.png'
import  LogoSvg  from '@assets/logo.svg'
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp(){
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{flexGrow: 1}} >

    <VStack flex={1} px={10} bg="gray.700"  >
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />
      
      {/* header */}
      <Center my={24}>  
        <LogoSvg  /> 
        <Text color="gray.100"  fontSize="sm" fontFamily="heading" >
        Treine sua mente e o seu corpo  
        </Text> 
      </Center>

      {/* Text Input */}
      <Center>
        <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
          Crie sua conta
        </Heading>

        <Input 
        placeholder="Nome"/>
        <Input 
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="E-mail"/>
        <Input 
        secureTextEntry
        placeholder="Senha"/>

      <Button title="Criar e acessar" />
      </Center>

   
      <Button 
      mt={24}
      variant="outline" 
      title="Voltar para o login" />

    </VStack>
    </ScrollView>
  )
}