import { Heading, HStack,Image, VStack, Text, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import {Entypo} from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
name:string;

};

export function ExerciseCard({name,...rest}:Props){
  return(
    <TouchableOpacity {...rest} >
      <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3} >
        <Image
        source={{uri: 'https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_960_720.jpg'}}
        alt="Exercício"
        w={16}
        h={16}
        rounded="md"
        mr={4}
        resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading fontSize="lg" color="white">
            {name}
          </Heading>
          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 Séries x 10 Repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  )
}