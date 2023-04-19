import { Box,Text, Card, Image, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import camisaPng from '@assets/productImages/camisa.png';

type Props = {
 status?: boolean
}

export function AdCarousel({status}:Props){
  const MAX_H = 280;
  return(
    <>
      {
      status === true ?
      <VStack bgColor="gray.600" >
        <Box w="full" h={MAX_H} bgColor="gray.300" >
          <Image
          background="gray.100"
          opacity="0.6"
          w="full"
          h={MAX_H}
          alt="alt"
          resizeMode="cover"
          source={camisaPng}
          />
          <Text position="absolute" w="full" h="20" left="100" bottom="90" 
          fontFamily="heading" fontSize="lg" color="gray.700">
            Anúncio Desativado
          </Text>
        </Box>
      </VStack>
      :
      <VStack bgColor="gray.600" >
        <Box w="full" h={MAX_H} bgColor="gray.300" >
          <Image
          w="full"
          h={MAX_H}
          alt="alt"
          resizeMode="cover"
          source={camisaPng}
          />
        </Box>
      </VStack>
      }
    </>
  );
}