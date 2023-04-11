import { Box, IImageProps, Icon, Image, View } from "native-base";
import { TouchableOpacity } from "react-native";
import { PencilSimpleLine } from "phosphor-react-native"

type Props = IImageProps & {
  size: number;
  onClick?: ()  =>  void;
}

export function UserPhoto({size,onClick,...rest}:Props){
  return(
    <>
        <Image
          w={size}
          h={size}
          rounded="full"
          borderWidth={2}
          borderColor="blue.500"
          {...rest}
        />
        <TouchableOpacity onPress={onClick} >
          <Box
            w={9}
            h={9}
            position="absolute"
            left={21}
            bottom={0}
            bgColor="blue.500"
            rounded="full"
            alignItems="center"
            justifyContent="center"
            >
            <PencilSimpleLine size="18" color="white" />
          </Box>
        </TouchableOpacity>
      </>
  )
}