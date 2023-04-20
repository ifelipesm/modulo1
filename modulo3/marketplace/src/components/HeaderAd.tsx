import { Box, HStack, Text, useTheme } from 'native-base'
import { ArrowLeft, PencilSimpleLine, Plus } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native';

type Props = {
 text?: string;
 type?: string;
 onBack?: () => void;
 onEdit?: () => void;
 onNewAd?: () => void;
}

export function HeaderAd({text,type,onBack,onEdit,onNewAd,...rest}:Props){
  
  const { colors } = useTheme();

  return(
    <HStack mt={16} alignItems="center" justifyContent="center" >
      {
        type === 'edit' ?
        <>
          <TouchableOpacity onPress={onBack}>
            <ArrowLeft color={colors.gray[100]} size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onEdit}>
            <Box ml={290}>
              <PencilSimpleLine size={24} color={colors.gray[100]}/>
            </Box>
          </TouchableOpacity>
        </>
      :
      type === 'myads' ?
      <>
        <Text fontSize="lg" color="gray.100" fontFamily="heading" right={5} textAlign="center" >
          {text}
        </Text>
        <TouchableOpacity onPress={onNewAd} >
          <Box left="16" >
            <Plus size={24} color={colors.gray[100]}/>
          </Box>
        </TouchableOpacity>
      </>
      :
      <HStack ml="4" alignItems="center">
        <TouchableOpacity onPress={onBack}>
          <ArrowLeft color={colors.gray[100]} size={24} />
        </TouchableOpacity>
        <Text fontSize="lg" color="gray.100" fontFamily="heading" w="full" right="4" textAlign="center" >
        {text}
        </Text>
      </HStack>
      }
    </HStack>
  );
}