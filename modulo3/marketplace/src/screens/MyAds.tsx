import { AdCard } from "@components/AdCard";
import { HeaderAd } from "@components/HeaderAd";
import { Box, Center, HStack, ScrollView, Select, Text, VStack } from "native-base";
import { useState } from "react";
import tenisPng from '@assets/productImages/tenis.png';
import armarioPng from '@assets/productImages/armario.png';
import coturnoPng from '@assets/productImages/coturno.png';
import sofaPng from '@assets/productImages/sofa.png';
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function MyAds(){

  const [service,setService] = useState('');

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleNewAd(){
    navigation.navigate("adcreate");
  }

  return(
    <ScrollView>
      <VStack px={6} flex={1}>
        <Box mb={5} ml="8" >
          <HeaderAd onNewAd={handleNewAd} type='myads' text="Meus Anúncios"/>
        </Box>
          <HStack mb={8} alignItems="center">
            <Text textAlign="center" fontSize="md" color="gray.100" fontFamily="body" >
              9 Anúncios
            </Text>
              <Select left="140" h={8} selectedValue={service} minWidth="120" _selectedItem={{
                bg: "gray.600",
              }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                <Select.Item label="Todos" value="todos" />
                <Select.Item label="Ativos" value="ativos" />
                <Select.Item label="Inativos" value="inativos" />
              </Select>
          </HStack>
        <HStack>
            <Center mr={4}>
                <AdCard productCondition="NOVO" productUri={tenisPng} 
                alt="teste" description="Tênis vermelho" price="R$ 120,00" />
                <AdCard productCondition="USADO" productUri={armarioPng} userPhotoUri='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.reallusion.com%2Fcharacter-creator%2Fincludes%2Fimages%2Fdefault%2Fshowcase_yumi.jpg&f=1&nofb=1&ipt=84e618751c3246127c0831fe5975f6f35d6b2ad83302665ee40a369426b59747&ipo=images' 
                alt="teste" description="Armário" price="R$ 200,00" />
                <AdCard productCondition="NOVO" productUri={sofaPng} userPhotoUri='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.reallusion.com%2Fcharacter-creator%2Fincludes%2Fimages%2Fdefault%2Fshowcase_yumi.jpg&f=1&nofb=1&ipt=84e618751c3246127c0831fe5975f6f35d6b2ad83302665ee40a369426b59747&ipo=images' 
                alt="teste" description="Sofá" price="R$ 1.200,00" />
            </Center>
            <Center>
                <AdCard productCondition="NOVO" productUri={sofaPng} userPhotoUri='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.reallusion.com%2Fcharacter-creator%2Fincludes%2Fimages%2Fdefault%2Fshowcase_yumi.jpg&f=1&nofb=1&ipt=84e618751c3246127c0831fe5975f6f35d6b2ad83302665ee40a369426b59747&ipo=images' 
                alt="teste" description="Sofá" price="R$ 1.200,00" />
                <AdCard productCondition="USADO" productUri={coturnoPng} userPhotoUri='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.reallusion.com%2Fcharacter-creator%2Fincludes%2Fimages%2Fdefault%2Fshowcase_yumi.jpg&f=1&nofb=1&ipt=84e618751c3246127c0831fe5975f6f35d6b2ad83302665ee40a369426b59747&ipo=images' 
                alt="teste" description="Coturno Feminino" price="R$ 150,00" />
                <AdCard productCondition="NOVO" productUri={sofaPng} userPhotoUri='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.reallusion.com%2Fcharacter-creator%2Fincludes%2Fimages%2Fdefault%2Fshowcase_yumi.jpg&f=1&nofb=1&ipt=84e618751c3246127c0831fe5975f6f35d6b2ad83302665ee40a369426b59747&ipo=images' 
                alt="teste" description="Sofá" price="R$ 1.200,00" />
            </Center>
        </HStack>
      </VStack>
    </ScrollView>
  )
}