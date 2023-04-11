import { VStack,Text, Input, Icon, Box, View, HStack, useTheme, Center } from "native-base";
import { MagnifyingGlass,  Sliders } from 'phosphor-react-native'
import DividerPng from '@assets/divider.svg';
import { TouchableOpacity } from "react-native";

export function SearchBar(){

  const { colors } = useTheme();

  return(

  <VStack>
    <Text mb={3} color="gray.300" fontFamily="body" fontSize="md" >
      Compre produtos variados
    </Text>
    <Box>
      <Input 
      w="full"
      h="12"
      backgroundColor="gray.700"
      borderColor="gray.700"
      borderRadius="md"
      fontSize="md"
      placeholderTextColor="gray.400"
      placeholder="Buscar anúncio"
      _focus={{
        borderColor:"gray.300",
        bgColor:"gray.700",
      }}
      />
      
      <Box position="absolute" mx={64}  >
        <HStack>
          <TouchableOpacity style={{ margin:10, marginRight:20}} >
            <MagnifyingGlass  color={colors.gray[200]}  />
          </TouchableOpacity>

            <DividerPng style={{ margin:13, marginRight:0}} />

          <TouchableOpacity style={{margin:10, marginRight:0}}>
            <Sliders  color={colors.gray[200]}  />
          </TouchableOpacity>
          { //Fazendo com Native Base, porém sem o color
            /*
            <Icon as={MagnifyingGlass} color="red.600"  mt={3} mr={2}
            />
            <Icon as={dividerPng}  mt={3} mr={2}
            />
            <Icon as={Sliders}  mt={3} mr={2}
            />
            */
          }
        </HStack>
      </Box>
    </Box>
  </VStack>

  )
}