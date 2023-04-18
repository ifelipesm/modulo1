import { Box, Card, Image, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import camisaPng from '@assets/productImages/camisa.png';


export function AdCarousel(){
  const MAX_H = 280;
  return(
    <VStack bgColor="gray.600" >
      <Box w="full"  h={MAX_H} bgColor="gray.300" >
        <Image
        w="full"
        h={MAX_H}
        alt="alt"
        resizeMode="cover"
        source={camisaPng}
        />
      </Box>
    </VStack>
  );
}