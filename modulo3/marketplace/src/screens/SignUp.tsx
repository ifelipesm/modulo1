import { Box, Center, Heading, ScrollView, Text, VStack } from "native-base";
import LogoIcon from '@assets/logo_icon.svg';
import AvatarCircle from '@assets/avatar.svg';
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { AuthFooter } from "@components/AuthFooter";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function SignUp(){

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleSignIn(){
    navigation.navigate('signIn');
  }

  return(
    <ScrollView 
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{flexGrow: 1}}>
      
      <VStack flex={1} bgColor="gray.600">
        <Box mx={12}>
          <Box mt={16} mb={8} >
            <Center>
              <Box mb={3}>
                <LogoIcon/>
              </Box>
              <Heading color="gray.100" fontSize="lg" fontFamily="heading" mb={2} >
                Boas vindas!
              </Heading>
              <Text color="gray.200" textAlign="center" fontSize="sm" fontFamily="body" mb={4} >
                Crie sua conta e use o espaço para comprar itens variados e vender seus produtos
              </Text>
            </Center>
          </Box>
            <Center mb={4} >
              <AvatarCircle/>
            </Center>
            <Center>
              <Input
                placeholder="Nome"
              />
              <Input
                placeholder="E-mail"
                autoCapitalize="none"
              />
              <Input
                placeholder="Telefone"
                keyboardType="number-pad"
              />
              <Input
                placeholder="Senha"
                autoCapitalize="none"
                secureTextEntry
              />
              <Input
                placeholder="Confirmar senha"
                autoCapitalize="none"
                secureTextEntry
              />
            </Center>
            <Center mt={6} mb={12} >
              <Button title="Criar" variant="black" />
            </Center>
            <Box>
              <AuthFooter action={handleSignIn} label="Já tem uma conta?" title="Ir para o login" />
            </Box>
        </Box>
      </VStack>
    </ScrollView>
  )
}