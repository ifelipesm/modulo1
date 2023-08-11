import { Box, HStack, Modal, Stack, Switch, Text, VStack, useTheme } from "native-base";
import { XCircle } from 'phosphor-react-native'
import { Checkbox } from "./Checkbox";
import { Button } from "./Button";
import { TouchableOpacity } from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { api } from "@services/api";
import { useProduct } from "@hooks/useProduct";

export function FilterModal(){

  const [isNewSelected,setIsNewSelected] = useState(false);
  const [isUsedSelected,setIsUsedSelected] = useState(false);
  const [acceptTrade,setAcceptTrade] = useState(false);
  const [paymentMethods,setPaymentMethods] = useState<string[]>([]);
  const [query,setQuery] = useState('');

  const [isBoletoSelected,setIsBoletoSelected] = useState(false);
  const [isPixSelected,setIsPixSelected] = useState(false);
  const [isCashSelected,setIsCashSelected] = useState(false);
  const [isCardSelected,setIsCardSelected] = useState(false);
  const [isDepositSelected,setIsDepositSelected] = useState(false);
  
  const [isModalOpen,setIsModalOpen] = useState(true);

  const { colors } = useTheme();

  const { modalQuery } = useProduct();

  function handleResetFilter(){
    setIsUsedSelected(false);
    setIsNewSelected(false);
    setAcceptTrade(false);

    setIsBoletoSelected(false);
    setIsCashSelected(false);
    setIsPixSelected(false);
    setIsCardSelected(false);
    setIsDepositSelected(false);
    setPaymentMethods([]);
  }

  async function handleApplyFilter(){
    try{
      const query = {
        isNew: isNewSelected,
        acceptTrade: acceptTrade,
        boleto: isBoletoSelected,
        cash: isCashSelected,
        deposit: isDepositSelected,
        card: isCardSelected,
        pix: isPixSelected,
      }
      modalQuery(query);
      console.log("New: ",isNewSelected)
      console.log("Used: ",isUsedSelected)
      console.log(paymentMethods);
      setIsModalOpen(false);
    }
    catch(e){
      throw e;
    }
    finally{
      setIsModalOpen(false);
    }
  }

  function handleNewCondition(){
    if(!isUsedSelected){
      isNewSelected ? setIsNewSelected(false) : setIsNewSelected(true);
    }
    console.log(isNewSelected);
  }

  function handleUsedCondition(){
    if(!isNewSelected){
      isUsedSelected ? setIsUsedSelected(false) : setIsUsedSelected(true);
    }
    console.log(isUsedSelected);
  }

  function handleCondition(){
    isNewSelected ? setIsNewSelected(false) : setIsNewSelected(true);
    isUsedSelected ? setIsUsedSelected(false) : setIsUsedSelected(true);
  }

  function handleAcceptTrade(){
    if(acceptTrade){
      setAcceptTrade(false)
      //setAcceptTradeValue(true);
    }
    else{
      setAcceptTrade(true);
      //setAcceptTradeValue(false);
      //console.log(acceptTrade);
    } 
  }

  function handleCheckbox(value: string,isChecked: boolean){

    let searchArray = paymentMethods.filter((payment) => payment === value);

    if(searchArray.length === 0 && isChecked){
      paymentMethods.push(value);
    }
    else if(searchArray.length > 0 || !isChecked){
      let removeValue = paymentMethods.filter((payment) => payment !== value) 
      setPaymentMethods(removeValue);
    }
    console.log(paymentMethods);
  }

  useFocusEffect(useCallback(()=>{
    handleCheckbox("boleto",isBoletoSelected);
  },[isBoletoSelected]));
  useFocusEffect(useCallback(()=>{
    handleCheckbox("pix",isPixSelected);
  },[isPixSelected]));
  useFocusEffect(useCallback(()=>{
    handleCheckbox("cash",isCashSelected);
  },[isCashSelected]));
  useFocusEffect(useCallback(()=>{
    handleCheckbox("card",isCardSelected);
  },[isCardSelected]));
  useFocusEffect(useCallback(()=>{
    handleCheckbox("deposit",isDepositSelected);
  },[isDepositSelected]));
  
  return(
      <Modal.Content borderRadius="2xl" h="590">
        <Modal.CloseButton/>
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
              <Switch isChecked={acceptTrade} value={acceptTrade} onToggle={setAcceptTrade} size="lg" offTrackColor="gray.500" onTrackColor="blue.700" onThumbColor="gray.700" offThumbColor="gray.50"  />
            </HStack>
            <Text mt={4} fontSize="md" fontFamily="heading" color="gray.200">
              Meios de pagamento aceitos
            </Text>
            <Checkbox  isChecked={isBoletoSelected} onChange={setIsBoletoSelected} value="boleto" text="Boleto" />
            <Checkbox  isChecked={isPixSelected} onChange={setIsPixSelected} value="Pix" text="Pix" />
            <Checkbox  isChecked={isCashSelected} onChange={setIsCashSelected} value="Dinheiro" text="Dinheiro" />
            <Checkbox  isChecked={isCardSelected} onChange={setIsCardSelected} value="Cartão de Crédito" text="Cartão de Crédito" />
            <Checkbox  isChecked={isDepositSelected} onChange={setIsDepositSelected} value="Depósito Bancário" text="Depósito Bancário" />

            <HStack mt={16} alignItems="center" justifyContent="center">
              <Button onPress={handleResetFilter} mr={3} sizeX="33" title="Resetar Filtros" type="gray"/>
              <Button onPress={() => handleApplyFilter()} sizeX="33" title="Aplicar Filtros" type="black"/>
            </HStack>
          </VStack>
        </Modal.Body>
      </Modal.Content>
  );
}