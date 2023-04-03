import { Box, Button, IImageProps, Icon, Image, View } from "native-base";
import { TouchableOpacity } from "react-native";
import { PencilSimpleLine } from "phosphor-react-native"

type Props = IImageProps & {
  size: number;
  onClick: ()  =>  void;
}

export function UserPhoto({size,onClick,...rest}:Props){
  return(
    <>
      <TouchableOpacity onPress={onClick} >
        <Image
          w={size}
          h={size}
          rounded="full"
          borderWidth={2}
          borderColor="blue.500"
          {...rest}
        />
            <Button
              w={10}
              h={10}
              position="absolute"
              left={52}
              bottom={0}
              bgColor="blue.500"
              rounded="full"
              >
              <PencilSimpleLine size="18" color="white" />
            </Button>
        </TouchableOpacity>
      </>
  )
}