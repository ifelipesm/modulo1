import { useEffect, useState } from "react";
import { Box, Center, ScrollView, Text, VStack, useToast} from "native-base";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useAuth } from "@hooks/useAuth";
import { Controller, useForm } from "react-hook-form";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { AuthFooter } from "@components/AuthFooter";

import LogoSvg from "@assets/logo.svg"
import { AppError } from "@utils/AppError";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


type FormData = {
  email: string;
  password: string;
}

const signInSchema = yup.object({
  email: yup.string().required("Informe o E-mail"),
  password: yup.string().required("Informe a Senha"),
});

export function SignIn(){
  const [isLoading,setIsLoading] = useState(false);
  const [isShown,setIsShown] = useState(false);
  
  const toast = useToast();
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const { signIn } = useAuth();

  const { control, handleSubmit, formState: {errors} } = useForm<FormData>({
    resolver: yupResolver(signInSchema)
  });

  function togglePassword(){
    isShown ? setIsShown(false) : setIsShown(true);
  }

  function handleNewAccount(){
    navigation.navigate("signUp");
  }

  
  async function handleSignIn({email,password}: FormData){
    
    try{
      
      setIsLoading(true);
      await signIn(email,password);

    } catch(error: any){

      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : "Não foi possível acessar. Tente novamente mais tarde."
      
      toast.show({
        title,
        placement:"top",
        bgColor: "red.500"
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
              <Text color="gray.200" fontSize="md" fontFamily="body" mb="4" >
                Acesse sua conta
              </Text>
              <Controller
                control={control}
                name="email"
                render={({field: { onChange,value }}) => (
                <Input 
                  placeholder="E-mail"
                  keyboardType="email-address"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}
                  autoCapitalize="none"
                />
                )}
              />
             
              <Controller
                control={control}
                name="password"
                render={({field: { onChange, value }})=> (
                  <Input 
                    placeholder="Senha"
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.password?.message}
                    field="password"
                    onTogglePassword={togglePassword}
                    isShown={isShown}
                    secureTextEntry={isShown}
                  />
                )}
              />

            </Center> 
              <Button mt="8" isLoading={isLoading} onPress={handleSubmit(handleSignIn)} title="Entrar" type="blue" 
              />
          </Center>
        </Box>
        <Box mx="12" mt="16">
          <AuthFooter action={handleNewAccount} label="Ainda não tem acesso?" title="Criar uma conta" />
        </Box>

      </VStack>
    
    </ScrollView>

  )
}