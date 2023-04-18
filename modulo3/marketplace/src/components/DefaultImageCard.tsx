import { Image,Box, Center, useTheme, Icon } from "native-base";
import { Plus, XCircle } from "phosphor-react-native";
import { ImageSourcePropType, ImageURISource, TouchableOpacity } from "react-native";

type Props = {
  productUri?: ImageURISource;
}

export function DefaultImageCard({productUri}:Props){
  const { colors } = useTheme();
  const size = 100;
  return(
    <TouchableOpacity>
      {productUri
      ? 
      <Box w={size} h={size}>
        <Image
          position="absolute"
          w={size}
          h={size}
          alt='product image'
          borderRadius="6"
          source={productUri}
          borderColor="gray.700"
        />
        <TouchableOpacity>
          <Box position="absolute"  mt={1} ml={71} >
            <Icon as={XCircle} fill={colors.gray[100]} size={35}/>
          </Box>
        </TouchableOpacity>
      </Box>
      :
      <Box w={size} h={size} borderRadius="6" bgColor="gray.500">
        <Center mt={9}>
          <Plus size={24} color={colors.gray[400]} />
        </Center>
      </Box>
      }
    </TouchableOpacity>
  )
}