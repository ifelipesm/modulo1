import { Box, Center, ScrollView, Text, VStack, useToast} from "native-base";
import LogoSvg from '@assets/logo.svg'
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { AuthFooter } from "@components/AuthFooter";
import { useEffect, useState } from "react";
import { AppError } from "@utils/AppError";
import { useAuth } from "@hooks/useAuth";
import { Controller, useForm } from "react-hook-form";


type FormData = {
  email: string;
  password: string;
}

export function SignIn(){
  const [isLoading,setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const toast = useToast();
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const { control, handleSubmit, formState: {errors} } = useForm<FormData>();

  function handleNewAccount(){
    navigation.navigate('signUp');
  }

  async function handleSignIn({email,password}: FormData){
    
    try{
      setIsLoading(true);
      console.log(isLoading);
      await signIn(email,password);
    } 
    catch(error){
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível acessar. Tente novamente mais tarde.'
      toast.show({
        title,
        placement:'top',
        bgColor: 'red.500'
      });
    }
    finally{
      setIsLoading(false);
    }
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
              <Controller
                control={control}
                name="email"
                rules={{required: 'Informe o e-mail'}}
                render={({field: { onChange }}) => (
                <Input 
                  placeholder="E-mail"
                  keyboardType="email-address"
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                  autoCapitalize="none"
                />
                )}
              />
             
              <Controller
                control={control}
                name="password"
                rules={{required: 'Informe a senha'}}
                render={({field: { onChange }})=> (
                  <Input 
                    onChangeText={onChange}
                    secureTextEntry
                    placeholder="Senha"
                    errorMessage={errors.password?.message}
                    autoCapitalize="none"
                  />
                )}
              />

            </Center> 
              <Button isLoading={isLoading} mt="8" title="Entrar" variant="blue" onPress={handleSubmit(handleSignIn)} />
          </Center>
        </Box>
        <Box mx="12" mt="16">
          <AuthFooter action={handleNewAccount} label="Ainda não tem acesso?" title="Criar uma conta" />
        </Box>

      </VStack>
    
    </ScrollView>

  )
}