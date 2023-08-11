import { AdCard } from "@components/AdCard";
import { HeaderAd } from "@components/HeaderAd";
import { Box, Center, FlatList, HStack, ScrollView, Select, Text, VStack } from "native-base";
import { useEffect, useState } from "react";
import tenisPng from '@assets/productImages/tenis.png';
import armarioPng from '@assets/productImages/armario.png';
import coturnoPng from '@assets/productImages/coturno.png';
import sofaPng from '@assets/productImages/sofa.png';
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { GetProductsByUserDTO } from "@dtos/GetProductsByUserDTO";
import { api } from "@services/api";
import { useAuth } from "@hooks/useAuth";

export function MyAds(){

  const [service,setService] = useState('');
  const [userProducts,setUserProducts] = useState<GetProductsByUserDTO[]>([]);
  const { user } = useAuth();

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleNewAd(){
    navigation.navigate("adcreate");
  }

  async function fetchUserProducts(){
    try{
        const response = await api.get(`/users/${user.id}/products`);
        console.log(response.data);
        setUserProducts(response.data);
    }
    catch(error){

    }
  }

  useEffect(()=>{
    fetchUserProducts();
  },[])

  return(
    <VStack px={6} flex={1}>
      <Box mb={5} ml="8" >
        <HeaderAd onNewAd={handleNewAd} type='myads' text="Meus Anúncios"/>
      </Box>
        <HStack mb={8} alignItems="center">
          <Text textAlign="center" fontSize="md" color="gray.100" fontFamily="body" >
            4 Anúncios
          </Text>
            <Select left="140" h={8} selectedValue={service} minWidth="120" _selectedItem={{
              bg: "gray.600",
            }} mt={1} onValueChange={itemValue => setService(itemValue)}>
              <Select.Item label="Todos" value="todos" />
              <Select.Item label="Ativos" value="ativos" />
              <Select.Item label="Inativos" value="inativos" />
            </Select>
        </HStack>
      
        {userProducts && (
          <FlatList
            data={userProducts}
            renderItem={({item}) => (
              <HStack>
              <AdCard productCondition={item.is_new} productUri={item.product_images[0]} 
              alt={item.name} name={item.name} price={item.price}/>
              <AdCard productCondition={item.is_new} productUri={item.product_images[0]} 
              alt={item.name} name={item.name} price={item.price}/>
              </HStack>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
    </VStack>
  )
}