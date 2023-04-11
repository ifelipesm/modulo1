import { HStack,Text,Image, IImageProps } from "native-base"
import { UserPhoto } from "./UserPhoto"

type Props = IImageProps & {
  size: number,
  userName: string;
}

export function UserCard({size,userName,...rest}:Props){

  return(
  <HStack flex={1} >
     <Image
          w={size}
          h={size}
          rounded="full"
          borderWidth={2}
          borderColor="blue.500"
          {...rest}
        />
    <Text pl={2} fontSize="sm" fontFamily="body" color="gray.100" >
    Boas vindas,{"\n"}<Text fontWeight="bold" fontFamily="body" >{userName}</Text>
    </Text>
  </HStack>
  )
}