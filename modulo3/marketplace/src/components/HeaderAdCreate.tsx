import { HStack, Text, useTheme } from 'native-base'
import { ArrowLeft } from 'phosphor-react-native'

type Props = {

}

export function HeaderAdCreate({...rest}:Props){
  
  const { colors } = useTheme();

  return(
    <HStack mt={16} alignItems="center">
      <ArrowLeft color={colors.gray[100]} />
      <Text fontSize="lg" color="gray.100" fontFamily="heading" w="full" right={5} textAlign="center" >
        Criar Anúncio
      </Text>
    </HStack>
  );
}