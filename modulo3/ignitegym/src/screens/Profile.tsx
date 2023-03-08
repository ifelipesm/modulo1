import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { VStack,Text, ScrollView, Center, Skeleton, Heading } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const PHOTO_SIZE = 33;

export function Profile(){
  const [photoIsLoading,setPhotoIsLoading] = useState(false);
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
              source={{uri: 'https://github.com/ifelipesm.png'}}
              alt="User Photo"
              size={PHOTO_SIZE}
            />
          }
          <TouchableOpacity>
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
          <Heading  color="gray.200" fontSize="md" mb={2} alignSelf="flex-start" mt={12}>
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