import { Box, Center, useTheme } from "native-base";
import { Plus } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

type Props = {
  pressable?: () => void;
}

export function EmptyImageCard({pressable}:Props){
  const { colors } = useTheme();
  const size = 100;
  return (
    <TouchableOpacity onPress={pressable} >
    <Box w={size} h={size} borderRadius="6" bgColor="gray.500">
      <Center mt={9}>
        <Plus size={24} color={colors.gray[400]} />
      </Center>
    </Box>
  </TouchableOpacity>
  )
}