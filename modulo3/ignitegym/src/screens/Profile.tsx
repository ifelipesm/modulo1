import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { VStack,Text, ScrollView, Center, Skeleton, Heading, Alert, Toast } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as yup from 'yup'
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const PHOTO_SIZE = 33;


type FormDataProps = {
  name:string;
  email: string;
  old_password: string;
  new_password: string;
  password_confirm: string;
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
  old_password: yup.string().required('Informe a senha antiga').min(6,'Mínimo de 6 caracteres'),
  new_password: yup.string().required('Informe a senha').min(6,'Mínimo de 6 caracteres').nope([yup.ref('old_password')],'Insira uma senha diferente da anterior'),
  password_confirm: yup.string().required('Confirme a senha').oneOf([yup.ref('new_password')],'As senhas devem coincidir'),
});

export function Profile(){
  const [photoIsLoading,setPhotoIsLoading] = useState(false);
  const [userPhoto,setUserPhoto] = useState('https://github.com/ifelipesm.png');
  
  const { control, handleSubmit, formState:{errors} } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  function handleUpdateProfile(data: FormDataProps){
    console.log(data);
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
        if(photoInfo.exists && (photoInfo.size / 1024 / 1024 < 5 ))
        setUserPhoto(photoSelected.assets[0].uri);
        else{
          return Toast.show({
            title: 'Imagem muito grande. Escolha uma de até 5 MB.',
            placement: 'top',
            bgColor: 'red.500'
          })
        }
      }
    }
    catch(error){
      Alert('Não foi possível carregar a imagem')
    }
    finally{
      setPhotoIsLoading(false);
    }
  }

  return (
    <VStack flex={1} >
      <ScreenHeader title="Perfil" />
      <ScrollView contentContainerStyle={{  paddingBottom: 36 }} >
        <Center mt={6} px={10}>
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
              source={{uri: userPhoto}}
              alt="User Photo"
              size={PHOTO_SIZE}
            />
          }
          <TouchableOpacity onPress={handleUserPhotoSelect} >
            <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8} >
              Alterar Foto
            </Text>
          </TouchableOpacity>

        <Controller
          control={control}
          name="name"
          render={({field: { onChange,value }})=> (
            <Input 
              placeholder="Nome"
              bg="gray.600"
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
              bg="gray.600"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
              isDisabled={true}
            />
          )}
        />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading  color="gray.200" fontFamily={"heading"} fontSize="md" mb={2} alignSelf="flex-start" mt={12}>
            Alterar Senha
          </Heading>

          <Controller
            control={control}
            name="old_password"
            render={({field: { onChange,value }})=> (
              <Input 
                placeholder="Senha Antiga"
                bg="gray.600"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.old_password?.message}
                secureTextEntry
              />
            )}
          />
          <Controller
            control={control}
            name="new_password"
            render={({field: { onChange,value }})=> (
              <Input 
                placeholder="Senha Nova"
                bg="gray.600"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.new_password?.message}
                secureTextEntry
              />
            )}
          />        
          <Controller
            control={control}
            name="password_confirm"
            render={({field: { onChange,value }})=> (
              <Input 
                placeholder="Senha Nova"
                bg="gray.600"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password_confirm?.message}
                secureTextEntry
              />
            )}
          />      

          <Button
          title="Atualizar"
          onPress={handleSubmit(handleUpdateProfile)}
          />
        </VStack>
      </ScrollView>
    </VStack>
  )
}