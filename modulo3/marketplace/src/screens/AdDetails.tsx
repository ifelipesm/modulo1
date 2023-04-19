import { AdCarousel } from "@components/AdCarousel";
import { ButtonDetails } from "@components/ButtonDetails";
import { ButtonPreview } from "@components/ButtonPreview";
import { HeaderAd } from "@components/HeaderAd";
import { UserCard } from "@components/UserCard";
import { useAuth } from "@hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Box, Center, HStack, ScrollView, Text, VStack } from "native-base";
import { Bank, Barcode, QrCode } from 'phosphor-react-native'
import { useState } from "react";



export function AdDetails(){
  const productIsActive = true;
  const productCondition = 'NOVO';
  const [activeAd,setActiveAd] = useState(true);
  const [activeAdType,setActiveAdType] = useState('blue');
  const [textAd,setTextAd] = useState('Reativar Anúncio');
  const { user } = useAuth();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleAdStatus(){
    if(activeAdType === 'black'){
      setActiveAd(true);
      setTextAd("Reativar Anúncio")
      setActiveAdType('blue');
    }
    else{
      setActiveAd(false);
      setTextAd("Desativar Anúncio")
      setActiveAdType('black');
    }
  }

  function handleRemoveAd(){

  }

  function handleGoBack(){
    navigation.navigate("myads");
  }

  function handleGoEdit(){
    navigation.navigate("adedit");
  }

  return(
<>
    <ScrollView>
      <VStack pb={4} px={8} flex={1}>
        <HeaderAd onBack={handleGoBack} onEdit={handleGoEdit} type="edit"/>
      </VStack>
      <AdCarousel status={activeAd} />
      <VStack bgColor="gray.600" py={4} px={8} flex={1}>
          <UserCard alt="alt" type="preview" size={7} user={user} />
          <Box>
            <Box 
            w={16} h={6} mt={4} mb={2} 
            borderRadius="2xl" alignItems="center"
            background={productIsActive ?  "gray.700" : "gray.100"}
            opacity={productIsActive ?  "1" : "0.45"}
            bgColor={productCondition === 'NOVO' ? 'blue.500' : 'gray.200'}
            >
              <Text fontSize="sm" color="gray.700" >
                {productCondition === 'NOVO' ? 'NOVO' : 'USADO'}
              </Text>
            </Box>
            <HStack alignItems="center">
              <Text fontSize="lg" fontFamily="heading" color="gray.100" >
                Luminária Pendente</Text>
              <Text fontFamily="heading" color="blue.700" fontSize="lg" ml={16}>
                R$ 45,00
              </Text>
            </HStack>
            <Text fontSize="sm" mt={2} fontFamily="body" color="gray.100">
            Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis cursus. 
            </Text>
            <Box mt={2}>
              <HStack mt={7} mb={4}>
                <Text fontSize="md"  fontFamily="heading" color="gray.100">Aceita Troca?</Text>
                <Text ml={2} fontSize="md"  fontFamily="body" color="gray.100" >Não</Text>
              </HStack>
              <Text fontSize="md" mt={2} fontFamily="heading" color="gray.100">
                Meios de pagamento:
              </Text>
              <HStack mt={2} alignItems="center">
              <Barcode/>
              <Text fontSize="md"  ml={2} fontFamily="body" color="gray.100">Boleto</Text>
              </HStack>
              <HStack mt={2} alignItems="center">
              <QrCode/>
              <Text fontSize="md"  ml={2} fontFamily="body" color="gray.100">Pix</Text>
              </HStack>
              <HStack mt={2} alignItems="center">
              <Bank/>
              <Text fontSize="md" ml={2} fontFamily="body" color="gray.100">Depósito Bancário</Text>
              </HStack>
            </Box>
          </Box>
      
        <ButtonDetails onPress={handleAdStatus} mb={2} mt={8} title={textAd} type={activeAdType}  />
        <ButtonDetails onPress={handleRemoveAd} title="Excluir Anúncio" type="gray" />

      </VStack>
    </ScrollView>

    </>
  )
}