import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Box, Center, Heading, ScrollView, Skeleton, Text, VStack, useToast } from "native-base";

import LogoIcon from '@assets/logo_icon.svg';
import AvatarCircle from '@assets/avatar.svg';
import defaultUserImg from "@assets/defaultimg.png"

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { AuthFooter } from "@components/AuthFooter";
import { UserPhoto } from "@components/UserPhoto";

import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import uuid from 'react-native-uuid';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { Controller, useForm } from "react-hook-form";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import { useAuth } from "@hooks/useAuth";

type FormDataProps = {
  avatar: string;
  name:string;
  email: string;
  tel: string;
  password: string;
  password_confirm: string;
}

type AvatarProps = {
  name: string;
  uri: string;
  type: string;
}

const phoneRegExp = /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{4})-?(\d{4}))$/

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
  tel: yup.string().required('Informe o telefone').matches(phoneRegExp,'Informe um número de telefone válido'),
  password: yup.string().required('Informe a senha').min(6,'Mínimo de 6 caracteres'),
  password_confirm: yup.string().required('Confirme a senha').oneOf([yup.ref('password')],'As senhas devem coincidir'),
});

const PHOTO_SIZE = 88;

export function SignUp(){

  const [isLoading,setIsLoading] = useState(false);
  const [isShown,setIsShown] = useState(false);
  const [isShownPasswordConfirm,setIsShownPasswordConfirm] = useState(false);


  const [photoIsLoading,setPhotoIsLoading] = useState(false);
  const [data,setData] = useState<FormData>({} as FormData);
  const [avatarPhoto,setAvatarPhoto] = useState<AvatarProps>({} as AvatarProps);

  const UUID = uuid.v1();
  const toast = useToast();
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const { signIn } = useAuth();

  const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  function togglePassword(){
    isShown ? setIsShown(false) : setIsShown(true);
  }
  function togglePasswordConfirm(){
    isShownPasswordConfirm ? setIsShownPasswordConfirm(false) : setIsShownPasswordConfirm(true);
  }

  function handleSignIn(){
    navigation.navigate('signIn');
  }

  async function handleSignUp({name,email,tel,password}:FormDataProps){
    try{
      setIsLoading(true);
      setData({} as FormData);
      data.append('name',name);
      data.append('email',email);
      data.append('tel',tel);
      data.append('password',password);
      console.log("Dados do usuário -> ",data);
      
      await api.post('/users',data,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      await signIn(email,password);

      toast.show({
        title:'Conta criada com sucesso!',
        placement:'top',
        bgColor: 'green.500'
      });
    }
    catch(error){
      setIsLoading(false);

      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível criar a conta. Tente novamente mais tarde.'
      
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

    async function handleUserPhotoSelect(){
      setPhotoIsLoading(true);
      try{
        const photoSelected = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 1,
          aspect:[4,4],
          allowsEditing: true,
        });
        if(photoSelected.canceled){
          return;
        }
        if(photoSelected.assets[0].uri){
          const photoInfo  = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);
          if(photoInfo.exists && (photoInfo.size / 1024 / 1024 > 5 )) {
   
            return toast.show({
              title: 'Imagem muito grande. Escolha uma de até 5 MB.',
              placement: 'top',
              bgColor: 'red.500'
            })
            
          }
        }
        
        const fileExtension = photoSelected.assets[0].uri.split('.').pop();
        let fileName = "";
        if(fileName === "")
        fileName =  `${UUID}.${fileExtension}`.toLowerCase();
        const photoFile = {
          name: fileName,
          uri: photoSelected.assets[0].uri,
          type: `${photoSelected.assets[0].type}/${fileExtension}`
        } as any;

        const userPhotoUploadForm = new FormData();
        userPhotoUploadForm.append('avatar', photoFile, photoFile.name);
        setAvatarPhoto(photoFile);
        setData(userPhotoUploadForm);
        console.log(data);
  
        toast.show({
          title: 'Foto carregada com sucesso.',
          placement: 'top',
          bgColor: 'green.500',
        })
  
      }
      catch(error){
        const isAppError = error instanceof AppError;
        const title = isAppError ? error.message : 'Não foi possível atualizar o avatar.'
        toast.show({
          title,
          placement: 'top',
          bgColor: 'red.500',
        })
      }
      finally{
        setPhotoIsLoading(false);
      }
    }

    useEffect(()=>{
    },[])

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
            
              {
                photoIsLoading ?
                <Skeleton 
                  w={PHOTO_SIZE} 
                  h={PHOTO_SIZE} 
                  rounded="full" 
                  startColor="gray.500"
                  endColor="gray.400"
                /> 
                :
                <UserPhoto 
                  onClick={handleUserPhotoSelect}
                  source={
                   avatarPhoto.uri !== undefined ? { uri: avatarPhoto.uri } : defaultUserImg
                  }
                  alt="Foto de Perfil"
                  size={PHOTO_SIZE}
                />
              }
            </Center>
            <Center>

            <Controller
            control={control}
            name="name"
            render={({field: { onChange,value }})=> (
              <Input 
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
              )}
            />

            <Controller
            control={control}
            name="email"
            render={({field: { onChange,value }})=> (
              <Input 
                placeholder="E-mail"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
                autoCapitalize="none"
              />
              )}
            />

            <Controller
              control={control}
              name="tel"
              render={({field: { onChange,value }})=> (
                <Input 
                  placeholder="Telefone"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.tel?.message}
                  keyboardType="phone-pad"
                  autoCapitalize="none"
              />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({field: { onChange,value }})=> (
                <Input 
                placeholder="Senha"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
                autoCapitalize="none"
                field="password"
                onTogglePassword={togglePassword}
                isShown={isShown}
                secureTextEntry={isShown}
              />
              )}
            />
            <Controller
              control={control}
              name="password_confirm"
              render={({field: { onChange,value }})=> (
                <Input 
                  placeholder="Confirmar senha"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password_confirm?.message}
                  autoCapitalize="none"
                  field="passwordConfirm"
                  onTogglePasswordConfirm={togglePasswordConfirm}
                  isShownPasswordConfirm={isShownPasswordConfirm}
                  secureTextEntry={isShownPasswordConfirm}
              />
              )}
            />

            </Center>
            <Center mt={6} mb={12} >
              <Button isLoading={isLoading} onPress={handleSubmit(handleSignUp)} title="Criar" type="black" />
            </Center>
            <Box>
              <AuthFooter action={handleSignIn} label="Já tem uma conta?" title="Ir para o login" />
            </Box>
        </Box>
      </VStack>
    </ScrollView>
  )
}