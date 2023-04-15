import { TouchableOpacity } from "react-native";
import { Plus } from 'phosphor-react-native'
import { HStack,Text, useTheme } from "native-base";

type Props = {
  onRedirect: () => void;
}

export function CreateAdButton({onRedirect,...rest}:Props){

  const { colors } = useTheme();
  
  return(
    <TouchableOpacity onPress={onRedirect} >
      <HStack
      w="139"
      h="45"
      px={3}
      alignItems="center"
      bgColor="gray.100"
      borderRadius="8" >
          <HStack alignItems="center">
            <Plus color={colors.gray[600]} size="16"/>
            <Text ml="2" fontFamily="body" fontSize="sm" color="gray.700">
              Criar Anúncio
            </Text>
          </HStack>
        </HStack>
      </TouchableOpacity>
  )
}