import { Box, HStack, Text, useTheme } from 'native-base'
import { ArrowLeft, PencilSimpleLine } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native';

type Props = {
 text?: string;
 type?: string;
 onBack?: () => void;
 onEdit?: () => void;
}

export function HeaderAd({text,type,onBack,onEdit,...rest}:Props){
  
  const { colors } = useTheme();

  return(
    <HStack mt={16} alignItems="center">
      <TouchableOpacity onPress={onBack}>
        <ArrowLeft color={colors.gray[100]} size={24} />
      </TouchableOpacity>
      {
        type !== 'edit' ?
      <Text fontSize="lg" color="gray.100" fontFamily="heading" w="full" right={5} textAlign="center" >
       {text}
      </Text>
      :
      <TouchableOpacity onPress={onEdit}>
        <Box ml={290}>
          <PencilSimpleLine size={24} color={colors.gray[100]}/>
        </Box>
      </TouchableOpacity>
      }
    </HStack>
  );
}