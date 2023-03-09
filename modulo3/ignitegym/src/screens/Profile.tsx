import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { VStack,Text, ScrollView, Center, Skeleton, Heading, Alert, Toast } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

const PHOTO_SIZE = 33;

export function Profile(){
  const [photoIsLoading,setPhotoIsLoading] = useState(false);
  const [userPhoto,setUserPhoto] = useState('https://github.com/ifelipesm.png');
  

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

          <Input
            placeholder="Nome"
            bg="gray.600"
          />
          <Input
            placeholder="E-mail"
            bg="gray.600"
            isDisabled
          />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading  color="gray.200" fontFamily={"heading"} fontSize="md" mb={2} alignSelf="flex-start" mt={12}>
            Alterar Senha
          </Heading>
          <Input
            placeholder="Senha Antiga"
            bg="gray.600"
            secureTextEntry
          />
          <Input
            placeholder="Nova Senha"
            bg="gray.600"
            secureTextEntry
          />
          <Input
            placeholder="Confime a nova senha"
            bg="gray.600"
            secureTextEntry
          />
          <Button
          title="Atualizar"
          />
        </VStack>
      </ScrollView>
    </VStack>
  )
}