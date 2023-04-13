import { UserCard } from "@components/UserCard";
import { useAuth } from "@hooks/useAuth";
import { Box,Center, HStack, ScrollView, Skeleton, Text, VStack } from "native-base";
import defaultUserImg from "@assets/defaultUserPhoto.png"
import { CreateAdButton } from "@components/CreateAdButton";
import { api } from "@services/api";
import { useState } from "react";
import { MyAdsCard } from "@components/MyAdsCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { SearchBar } from "@components/SearchBar";
import { AdCard } from "@components/AdCard";
import tenisPng from '@assets/productImages/tenis.png';
import armarioPng from '@assets/productImages/armario.png';
import bicicletaPng from '@assets/productImages/bicicleta.png';
import coturnoPng from '@assets/productImages/coturno.png';
import camisaPng from '@assets/productImages/camisa.png';
import sofaPng from '@assets/productImages/sofa.png';


const PHOTO_SIZE = 41;


export function Home(){
  const [photoIsLoading,setPhotoIsLoading] = useState(false);
  
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { user } = useAuth();

  function handleCreateAd(){
    navigation.navigate("adcreate");
  }

  return(
    <VStack bgColor="gray.600"  flex={1} px={6}>
      <ScrollView showsVerticalScrollIndicator={false}>

      <HStack mt={16}>
        <UserCard 
        alt="Foto"
        user={user}
        size={PHOTO_SIZE}/>
        <CreateAdButton onRedirect={handleCreateAd}  />
      </HStack>
      <Box mt={8} >
      <MyAdsCard/>
      </Box>
      <Box mt={8} mb={6}>
        <SearchBar/>
      </Box>
      <HStack>
        <Center mr={4}>
          <Center>
            <AdCard source={tenisPng} 
            alt="teste" description="Tênis vermelho" price="R$ 120,00" />
            <AdCard source={armarioPng} 
            alt="teste" description="Armário" price="R$ 200,00" />
            <AdCard source={bicicletaPng} 
            alt="teste" description="Bicicleta" price="R$ 1500,00" />
          </Center>
        </Center>
        <Center>
          <Center>
            <AdCard source={sofaPng} 
            alt="teste" description="Sofá" price="R$ 800,00" />
            <AdCard source={coturnoPng} 
            alt="teste" description="Coturno Feminino" price="R$ 150,00" />
            <AdCard source={camisaPng} 
            alt="teste" description="Camisa" price="R$ 80,00" />
          </Center>
        </Center>
      </HStack>
      </ScrollView>

    </VStack>
  )
}