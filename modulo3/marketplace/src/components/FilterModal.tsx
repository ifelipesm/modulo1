import { Box, HStack, Modal, Stack, Switch, Text, VStack, useTheme } from "native-base";
import { XCircle } from 'phosphor-react-native'
import { Checkbox } from "./Checkbox";
import { Button } from "./Button";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

type Props = {

}

export function FilterModal({}:Props){
  const [isNewSelected,setIsNewSelected] = useState(true);
  const [isUsedSelected,setIsUsedSelected] = useState(false);

  const { colors } = useTheme();

  function handleFilterReset(){

  }

  function handleApplyFilter(){

  }

  function handleNewCondition(){
    isNewSelected ? setIsNewSelected(false) : setIsNewSelected(true);
  }

  function handleUsedCondition(){
    isUsedSelected ? setIsUsedSelected(false) : setIsUsedSelected(true);
  }
  
  return(
       
    <Modal.Content borderRadius="2xl" h="590">
      <Modal.CloseButton />
      <Modal.Header  >
        <Text fontSize="lg" fontFamily="heading" color="gray.100">
          Filtrar Anúncios
        </Text>
      </Modal.Header>
      <Modal.Body>
        <VStack flex={1} mx={2}>
          <Text fontSize="md" fontFamily="heading" color="gray.200">
            Condição
          </Text>
          <HStack mt={2}>
            <TouchableOpacity onPress={handleNewCondition} >
              <Box w={24} h={8} mr={4}
              borderRadius="2xl" 
              bgColor={isNewSelected ? "blue.700" : "gray.500"} >
                <HStack alignItems="center" justifyContent="center" top={1}>
                    <Text fontSize="sm" fontFamily="heading" color={isNewSelected ? "gray.700" : "gray.300"}>
                      NOVO
                    </Text>
                    {
                    isNewSelected ?
                    <Box left={1}>
                      <XCircle color={colors.gray[600]} size={20} />
                    </Box>
                    :
                    <></>
                    }
                </HStack>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleUsedCondition} >
              <Box w={24} h={8} mr={4}
              borderRadius="2xl" 
              bgColor={isUsedSelected ? "blue.700" : "gray.500"} >
                <HStack alignItems="center" justifyContent="center" top={1}>
                    <Text fontSize="sm" fontFamily="heading" color={isUsedSelected ? "gray.700" : "gray.300"}>
                      USADO
                    </Text>
                    {
                    isUsedSelected ?
                    <Box left={1}>
                      <XCircle color={colors.gray[600]} size={20} />
                    </Box>
                    :
                    <></>
                    }
                </HStack>
              </Box>
            </TouchableOpacity>
          </HStack>
          <Text mt={4} fontSize="md" fontFamily="heading" color="gray.200">
            Aceita Troca?
          </Text>
          <HStack>
            <Switch size="lg" offTrackColor="gray.500" onTrackColor="blue.700" onThumbColor="gray.700" offThumbColor="gray.50"  />
          </HStack>
          <Text mt={4} fontSize="md" fontFamily="heading" color="gray.200">
            Meios de pagamento aceitos
          </Text>
          <Checkbox  value="boleto" text="Boleto" />
          <Checkbox value="Pix" text="Pix" />
          <Checkbox value="Dinheiro" text="Dinheiro" />
          <Checkbox value="Cartão de Crédito" text="Cartão de Crédito" />
          <Checkbox value="Depósito Bancário" text="Depósito Bancário" />

          <HStack mt={16} alignItems="center" justifyContent="center">
            <Button onPress={handleFilterReset} mr={3} sizeX="33" title="Resetar Filtros" type="gray"/>
            <Button onPress={handleApplyFilter} sizeX="33" title="Aplicar Filtros" type="black"/>
          </HStack>

        </VStack>
      </Modal.Body>
    </Modal.Content>
  );
}