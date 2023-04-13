import { HStack,Text,Image, IImageProps } from "native-base"
import { UserPhoto } from "./UserPhoto"
import { api } from "@services/api";
import { UserDTO } from "@dtos/UserDTO";
import defaultAvatar from "@assets/defaultUserPhoto.png";

type Props = IImageProps & {
  size: number,
  user: UserDTO;
}


export function UserCard({size,user,...rest}:Props){

  // const avatar_uri =  `${api.defaults.baseURL}/users/${user.id}?avatar=${user.avatar}`
  
  // ternário do source
  // user.avatar ? { uri: avatar_uri } : 
  
  return(
  <HStack flex={1} >
     <Image
          w={size}
          h={size}
          source={{uri: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.reallusion.com%2Fcharacter-creator%2Fincludes%2Fimages%2Fdefault%2Fshowcase_yumi.jpg&f=1&nofb=1&ipt=84e618751c3246127c0831fe5975f6f35d6b2ad83302665ee40a369426b59747&ipo=images`} }
          rounded="full"
          borderWidth={2}
          borderColor="blue.500"
          {...rest}
        />
    <Text pl={2} fontSize="sm" fontFamily="body" color="gray.100" >
    Boas vindas,{"\n"}<Text fontWeight="bold" fontFamily="body" >{user.name}</Text>
    </Text>
  </HStack>
  )
}