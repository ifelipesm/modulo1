import { UserCard } from "@components/UserCard";
import { useAuth } from "@hooks/useAuth";
import { Text,Box,Center, FlatList, HStack, Modal, ScrollView, VStack, theme } from "native-base";
import { CreateAdButton } from "@components/CreateAdButton";
import { useEffect, useState } from "react";
import { MyAdsCard } from "@components/MyAdsCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { SearchBar } from "@components/SearchBar";
import { AdCard } from "@components/AdCard";
import { FilterModal } from "@components/FilterModal";
import { api } from "@services/api";
import { GetProductsByFilterDTO } from "@dtos/GetProductsByFilterDTO";
import { GetProductsByUserDTO } from "@dtos/GetProductsByUserDTO";
import { useProduct } from "@hooks/useProduct";



const PHOTO_SIZE = 46;

export function Home(){
  const [photoIsLoading,setPhotoIsLoading] = useState(false);
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [products,setProducts] = useState<GetProductsByUserDTO[]>([]);

  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { user } = useAuth();
  const { query,clearQuery } = useProduct();

  function handleCreateAd(){
    navigation.navigate("adcreate");
  }

  function handleOpenFilter(){
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  }

  function handleMyAds(){
    navigation.navigate("myads");
  }

  async function fetchProducts(){
    if(query !== ''){
    const response = await api.get(`/products/?`+query);
    setProducts(response.data);
    //console.log(response.data);
    console.log("before clear:",query);
    clearQuery();
    console.log("clear:",query)
    }
  }

  async function fetchProductImages(path: string){
    const response = await api.get(`/images/${path}`);
    console.log(response.data);
    return response.data as string;
  }

  function handleQuerySearch(){
    fetchProducts();
  }

  useEffect(()=>{
    fetchProducts();
  },[])

  return(
    <>
      <VStack bgColor="gray.600"  flex={1} px={6}>

        <HStack mt={16}>
          <UserCard 
          alt="Foto"
          user={user}
          size={PHOTO_SIZE}/>
          <CreateAdButton onRedirect={handleCreateAd}  />
        </HStack>
        <Box mt={8} >
          <MyAdsCard onRedirect={handleMyAds}  />
        </Box>
        <Box mt={8} mb={6}>
          <VStack>
            <Text mb={3} color="gray.300" fontFamily="body" fontSize="md" >
              Compre produtos variados
            </Text>
            <Box>
              <SearchBar onQuerySearch={fetchProducts} onFilterPress={handleOpenFilter} />
            </Box>
          </VStack>
        </Box>
        <>
        {products && (
            <FlatList
              data={products}
              keyExtractor={(item) => item.id}
              numColumns={2}
              renderItem={({item}) => (
                <AdCard 
                productCondition={item.is_new} productIsActive={item.accept_trade} 
                userPhotoUri={item.user.avatar} productUri={item.product_images[0].path} 
                alt={item.name} name={item.name} price={item.price}
                />
              )}
              showsVerticalScrollIndicator={false}
            />
          )}
        </>

      </VStack>
      <Modal isOpen={isModalOpen} onClose={setIsModalOpen} size="xl">
        <FilterModal />
      </Modal>
    </>
  )
}