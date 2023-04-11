import { UserCard } from "@components/UserCard";
import { useAuth } from "@hooks/useAuth";
import { Box,Center, HStack, Skeleton, Text, VStack } from "native-base";
import defaultUserImg from "@assets/defaultimg.png"
import { CreateAdButton } from "@components/CreateAdButton";
import { api } from "@services/api";
import { useState } from "react";
import { AdsCard } from "@components/AdsCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { SearchBar } from "@components/SearchBar";


const PHOTO_SIZE = 41;


export function Home(){
  const [photoIsLoading,setPhotoIsLoading] = useState(false);
  
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { user } = useAuth();
  const avatar_uri =  `${api.defaults.baseURL}/users/${user.id}?avatar=${user.avatar}`

  function handleCreateAd(){
    navigation.navigate("adcreate");
  }

  return(
    <VStack bgColor="gray.600"  flex={1} px={6}>
      <HStack mt={16}>
        <UserCard 
        alt="Foto"
        size={PHOTO_SIZE} userName={user.name}/>
        <CreateAdButton onRedirect={handleCreateAd}  />
      </HStack>
      <Box mt={8} >
      <AdsCard/>
      </Box>
      <Box mt={8}>
        <SearchBar/>
      </Box>

    </VStack>
  )
}