import {Box, IImageProps, Image, Text, VStack} from 'native-base'
import { ImageSourcePropType, ImageURISource, TouchableOpacity } from 'react-native'
import defaultPhoto from '@assets/defaultUserPhoto.png'
import { api } from '@services/api';

type AdCardProps = IImageProps & {
  name: string,
  price: number,
  userPhotoUri: string;
  productUri: string;
  productCondition: boolean;
  productIsActive?: boolean;
}

export function AdCard({name,price,userPhotoUri,productUri,productCondition,productIsActive}:AdCardProps){
  const size = 8;
  const productSource = `${api.defaults.baseURL}/images/${productUri}`
  const userAvatarSource = `${api.defaults.baseURL}/images/${userPhotoUri}`

  return(
    <Box w='48%' mr={4} >
      <VStack >
        <TouchableOpacity>
          <Image
          background={productIsActive ?  "gray.700" : "gray.100"}
          opacity={productIsActive ?  "1" : "0.45"}
          h={111}
          source={{uri: productSource}}
          alt="Produto"
          borderRadius="6"
          rounded="md"
          resizeMode="cover"
          />
        </TouchableOpacity>
        <Box mt={2} mb={6}>
          <Text fontSize="md" color="gray.200" fontFamily="body" >
            {name}
          </Text>
          <Text fontSize="md" fontFamily="body" color="gray.100" fontWeight="bold" >
            R$ {price}
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
            source={ (userPhotoUri !== undefined || userPhotoUri !== '') ? {uri: userAvatarSource } : defaultPhoto }
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
        bgColor={productCondition === true ? 'blue.500' : 'gray.200'}
        >
          <Text fontSize="sm" color="gray.700" >
            {productCondition === true ? 'NOVO' : 'USADO'}
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