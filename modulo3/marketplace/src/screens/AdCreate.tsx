import { HeaderAdCreate } from "@components/HeaderAdCreate";
import { DefaultImageCard } from "@components/DefaultImageCard";
import { Box, Center, HStack, ScrollView, Switch, Text, VStack } from "native-base";
import tenisPng from '@assets/productImages/tenis.png';
import { Input } from "@components/Input";
import { Checkbox } from "@components/Checkbox";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";


export function AdCreate(){

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleAdPreview(){
    navigation.navigate("adpreview");
  }

  function handleFormCancel(){
    navigation.navigate("home");
  }

  return(
    <>
      <VStack bgColor="gray.600" px={7} flex={1}> 
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderAdCreate />
          <Box mt={8}>
            <Text fontSize="md" color="gray.100" fontFamily="heading">
              Imagens
            </Text>
            <Text mt={2} fontSize="md" color="gray.100" fontFamily="body">
              Escolha até 3 imagens para mostrar o quanto o seu produto é incrível!
            </Text>
            <Box mt={3}>
              <HStack>
                <Box>
                  <DefaultImageCard productUri={tenisPng} />
                </Box>
                <Box ml={2}>
                  <DefaultImageCard />
                </Box>
              </HStack>
            </Box>
          </Box>
          <Box mt={8}>
            <Text fontSize="md" color="gray.100" fontFamily="heading">
              Sobre o produto
            </Text>
            <Input placeholder="Título do anúncio" mt={4}/>
            <Input placeholder="Descrição do produto" pb={32}   h={40} mt={4}/>
            <HStack>
              <Checkbox  rounded="full" mr={5} text="Produto Novo" value="Novo"/>
              <Checkbox  rounded="full" text="Produto Usado" value="Usado"/>
            </HStack>
            <Box>
            <Text mt={8} fontSize="md" color="gray.100" fontFamily="heading">
              Venda
            </Text>
              <Input placeholder="Valor do produto" mt={4}/>
            </Box>
            <Box>
              <Text mt={4} fontSize="md" color="gray.100" fontFamily="heading">
                Aceita Troca?
              </Text>
              <HStack>
                <Switch size="lg" offTrackColor="gray.500" onTrackColor="blue.700" onThumbColor="gray.700" offThumbColor="gray.50"  />
              </HStack>
            </Box>
            <Box>
              <Text mb={4} mt={4} fontSize="md" color="gray.100" fontFamily="heading">
                Meios de pagamentos aceitos
              </Text>
              <Box mb={18}>
                <Checkbox mb={2} text="Boleto" value="Boleto"/>
                <Checkbox mb={2} text="Pix" value="Pix"/>
                <Checkbox mb={2} text="Dinheiro" value="Dinheiro"/>
                <Checkbox mb={2} text="Cartão de Crédito" value="Cartão de Crédito"/>
                <Checkbox mb={2} text="Depósito Bancário" value="Depósito Bancário"/>
              </Box>
            </Box>
          </Box>

        </ScrollView>       
      </VStack>
      <Box h={65} mt={7}>
        <Center>
          <HStack  >
            <Button onPress={handleFormCancel} mr={3} sizeX="40" title="Cancelar" type="gray"/>
            <Button onPress={handleAdPreview}  sizeX="40" title="Avançar" type="black"/>
          </HStack>
        </Center>
      </Box>
    </>
  )
}