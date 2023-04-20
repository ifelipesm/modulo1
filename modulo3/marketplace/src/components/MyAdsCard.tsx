import { Text,Box, Center, HStack, VStack, useTheme } from "native-base";
import { Tag,ArrowRight } from 'phosphor-react-native'
import { TouchableOpacity } from "react-native";

type Props = {
  onRedirect: () => void;
}

export function MyAdsCard({onRedirect}:Props){

  const { colors } = useTheme();

  return (
    <VStack >
      <Text mb={3} color="gray.300" fontFamily="body" fontSize="md" >
        Seus produtos anunciados para venda
      </Text>
      <TouchableOpacity onPress={onRedirect} >
        <HStack bgColor="blue.900" borderRadius={8} mt={3} px={4} py={3}>
            <HStack alignItems="center" >
                <Tag size={22} color={colors.blue[500]} />
                <VStack ml={4} >
                  <Text fontSize="lg" fontFamily="heading">4</Text>
                  <Text fontSize="sm" fontFamily="body">anúncios ativos</Text>
                </VStack>
              </HStack>
                <HStack alignItems="center" ml={10} >
                  <ArrowRight size={18} color={colors.blue[500]} />
                  <Text fontSize="sm" fontFamily="body" color="blue.500" ml={2} >
                    Meus anúncios
                  </Text>
              </HStack>
          </HStack>
        </TouchableOpacity>
    </VStack>
  )
}