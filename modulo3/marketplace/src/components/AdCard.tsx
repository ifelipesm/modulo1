import {Box, IImageProps, Image, Text, VStack} from 'native-base'
import { ImageURISource, TouchableOpacity } from 'react-native'
import defaultPhoto from '@assets/defaultUserPhoto.png'

type AdCardProps = IImageProps & {
  description: string,
  price: string,
  userPhotoUri?: string;
  productUri: ImageURISource;
  productCondition: string;
  productIsActive?: boolean;
}

export function AdCard({description,price,userPhotoUri,productUri,productCondition,productIsActive}:AdCardProps){
  const size = 8;


  return(
    <Box>
      <VStack >
        <TouchableOpacity>
          <Image
          background={productIsActive ?  "gray.700" : "gray.100"}
          opacity={productIsActive ?  "1" : "0.45"}
          w={164}
          h={111}
          source={productUri}
          alt="Produto"
          borderRadius="6"
          rounded="md"
          resizeMode="cover"
          />
        </TouchableOpacity>
        <Box mt={2} mb={6}>
          <Text fontSize="md" color="gray.200" fontFamily="body" >
            {description}
          </Text>
          <Text fontSize="md" fontFamily="body" color="gray.100" fontWeight="bold" >
            {price}
          </Text>
        </Box>
      </VStack>
        { userPhotoUri ?
          <Image
            position="absolute"
            w={size}
            h={size}
            ml={1}
            mt={1}
            alt='user image'
            source={ userPhotoUri ? {uri: userPhotoUri } : defaultPhoto }
            rounded="full"
            borderWidth={1}
            borderColor="gray.700"
          />
          :
          <></>
        }
        <Box 
        position="absolute" w={16} h={6} top={1} right={2} ml={1} mt={1} 
        borderRadius="2xl" alignItems="center"
        background={productIsActive ?  "gray.700" : "gray.100"}
        opacity={productIsActive ?  "1" : "0.45"}
        bgColor={productCondition === 'NOVO' ? 'blue.500' : 'gray.200'}
        >
          <Text fontSize="sm" color="gray.700" >
            {productCondition === 'NOVO' ? 'NOVO' : 'USADO'}
          </Text>
        </Box>
        { productIsActive ?
          <>
          </>
          :
          <Box position="absolute" w='full' h={4} top={20} left={2}  mt={1} 
          borderRadius="2xl" >
            <Text fontSize="sm" fontFamily="heading" color="gray.700">
              ANÚNCIO DESATIVADO
            </Text>
          </Box>
        }
    </Box>
  );
}