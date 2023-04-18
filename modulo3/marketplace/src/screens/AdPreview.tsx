import { AdCarousel } from "@components/AdCarousel";
import { ButtonPreview } from "@components/ButtonPreview";
import { UserCard } from "@components/UserCard";
import { useAuth } from "@hooks/useAuth";
import { Box, Center, HStack, ScrollView, Text, VStack } from "native-base";
import { Bank, Barcode, QrCode } from 'phosphor-react-native'


export function AdPreview(){
  const productIsActive = true;
  const productCondition = 'NOVO';
  const { user } = useAuth();
  return(
    <>
    
    <ScrollView>
      <VStack bgColor="blue.700" px={8} h={120} >
        <Box mt={12}>
          <Center>
            <Text color="gray.700" fontSize="md" fontFamily="heading" >
              Pré-Visualização do anúncio
            </Text>
            <Text color="gray.700" fontSize="sm" fontFamily="body" >
              É assim que seu produto vai aparecer!
            </Text>
          </Center>
        </Box>
      </VStack>
      <AdCarousel/>
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
      </VStack>
    </ScrollView>
    <Box h={16} mt={5} >
      <HStack alignItems="center" justifyContent="center" >
        <ButtonPreview mr={4} title="Voltar e Editar" type="gray" sizeX="33" />
        <ButtonPreview title="Publicar" type="blue" sizeX="33" />
      </HStack>
    </Box>
    </>
  )
}