import { HStack,Text,Image, IImageProps } from "native-base"
import { UserPhoto } from "./UserPhoto"
import { api } from "@services/api";
import { UserDTO } from "@dtos/UserDTO";
import defaultAvatar from "@assets/defaultUserPhoto.png";

type Props = IImageProps & {
  size: number,
  user: UserDTO;
  type?: string;
}


export function UserCard({size,user,type,...rest}:Props){

  
   const avatar_uri =  `${api.defaults.baseURL}/images/${user.avatar}`
  
  // ternário do source
  // user.avatar ? { uri: avatar_uri } : 
  
  return(
    <HStack flex={type !== 'preview'? 1 : 0} >
      <Image
        w={size}
        h={size}
        source={user.avatar ? { uri: avatar_uri } : defaultAvatar }
        rounded="full"
        borderWidth={2}
        borderColor="blue.500"
        {...rest}
      />
      {
        type !== 'preview' ?
        <Text pl={2} fontSize="md" fontFamily="body" color="gray.100" >
        Boas vindas,{"\n"}<Text fontWeight="bold" fontFamily="body" >{user.name}</Text>
        </Text>
        :
        <Text pl={2} fontSize="md" color="gray.100" fontFamily="body" >{user.name}</Text>
      }
    </HStack>
  )
}