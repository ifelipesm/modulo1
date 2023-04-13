import {Box, IImageProps, Image, Text, VStack} from 'native-base'
import { TouchableOpacity } from 'react-native'

type AdCardProps = IImageProps & {
  description: string,
  price: string,

}

export function AdCard({description,price,...rest}:AdCardProps){
  


  return(
    <TouchableOpacity>
      <VStack>
        <Image
        w={164}
        h={111}
        borderRadius="6"
        rounded="md"
        resizeMode="cover"
        {...rest}
        />
        <Box mt={2} mb={6}>
          <Text>
            {description}
          </Text>
          <Text>
            {price}
          </Text>
        </Box>
      </VStack>
    </TouchableOpacity>
  );
}