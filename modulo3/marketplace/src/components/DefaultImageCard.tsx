import { Image,Box, Center, useTheme, Icon, IImageProps } from "native-base";
import { Plus, XCircle } from "phosphor-react-native";
import { ImageSourcePropType, ImageURISource, TouchableOpacity } from "react-native";

type Props = IImageProps & {
  productUri?: string;
  onRemove: () => void;
}

export function DefaultImageCard({productUri,onRemove}:Props){
  const { colors } = useTheme();
  const size = 100;
  return(
    <>
      {!!productUri
      ? 
      <Box w={size} h={size}>
        <Image
          position="absolute"
          w={size}
          h={size}
          source={{uri: productUri }}
          alt='product image'
          borderRadius="6"
          borderColor="gray.700"
        />
        <TouchableOpacity onPress={onRemove}>
          <Box position="absolute"  mt={1} ml={71} >
            <Icon as={XCircle} fill={colors.gray[100]} size={35}/>
          </Box>
        </TouchableOpacity>
      </Box>
      :
      <></>
      }
    </>
  )
}