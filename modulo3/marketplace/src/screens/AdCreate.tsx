import { HeaderAd } from "@components/HeaderAd";
import { DefaultImageCard } from "@components/DefaultImageCard";
import { Box, Center, FlatList, HStack, ScrollView, Switch, Text, VStack, useToast } from "native-base";
import tenisPng from '@assets/productImages/tenis.png';
import { Input } from "@components/Input";
import { Checkbox } from "@components/Checkbox";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { AppError } from "@utils/AppError";
import uuid from 'react-native-uuid';
import { useState } from "react";
import { ProductDTO } from "@dtos/ProductDTO";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { EmptyImageCard } from "@components/EmptyImageCard";
import { api } from "@services/api";

type AvatarProps = {
  name: string;
  uri: string;
  type: string;
};

type FormDataProps = {
  product_images: string;
  name: string;
  description: string;
  is_new: string;
  price: string;
  accept_trade: boolean;
  payment_methods: 
  [
    key:  "pix" | "cash" | "deposit" | "boleto" | "card"
  ]
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o título do anúncio'),
  description: yup.string().required('Descreva o anúncio'),
  is_new: yup.bool().oneOf([true],'Marque a opção'),
  price: yup.string().required('Informe o valor do produto'),
  payment_methods: yup.bool().oneOf([true],'Marque a opção de pagamento'),
});

export function AdCreate(){
  const [avatarPhoto,setAvatarPhoto] = useState<AvatarProps[]>([] as AvatarProps[]);
  const [isLoading,setIsLoading] = useState(false);

  const [data,setData] = useState<FormData>({} as FormData);
  const [photoIsLoading,setPhotoIsLoading] = useState(false);
  const [switchActive,setSwitchActive] = useState(false);

  const { control, handleSubmit, formState } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const { errors } = formState
  function onCheckboxFormSubmit(data: any) {
    console.log(JSON.stringify(data, null, 4))
    return false
  }

  const toast = useToast();
  const UUID = uuid.v1();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  async function handleAdPreview({name,description,is_new,price,accept_trade,payment_methods}:FormDataProps){
    try{
      setIsLoading(true);
      setData({} as FormData);
      
      let trade = '';
      trade = accept_trade.toString();

      data.append('name',name);
      data.append('description',description);
      data.append('is_new',is_new);
      data.append('price',price);
      data.append('accept_trade',trade);
      data.append('payment_methods',JSON.stringify(payment_methods));
      
      await api.post('/products',data,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      toast.show({
        title:'Anúncio criado com sucesso!',
        placement:'top',
        bgColor: 'green.500'
      });
    }
    catch(error){
      setIsLoading(false);

      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível criar o anúncio. Tente novamente mais tarde.'
      
      toast.show({
        title,
        placement:'top',
        bgColor: 'red.500'
      });
    }
    finally{
      setIsLoading(false);
    }
  }

  async function handleUserPhotoSelect(){
    setPhotoIsLoading(true);
    try{
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect:[4,4],
        allowsEditing: true,
      });
      if(photoSelected.canceled){
        return;
      }
      if(photoSelected.assets[0].uri){
        const photoInfo  = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);
        if(photoInfo.exists && (photoInfo.size / 1024 / 1024 > 5 )) {
 
          return toast.show({
            title: 'Imagem muito grande. Escolha uma de até 5 MB.',
            placement: 'top',
            bgColor: 'red.500'
          })
          
        }
      }
      const fileExtension = photoSelected.assets[0].uri.split('.').pop();
      let fileName = "";
      if(fileName === "")
      fileName =  `${UUID}.${fileExtension}`.toLowerCase();
      const photoFile = {
        name: fileName,
        uri: photoSelected.assets[0].uri,
        type: `${photoSelected.assets[0].type}/${fileExtension}`
      } as any;

      const userPhotoUploadForm = new FormData();

      userPhotoUploadForm.append('product_images', photoFile, photoFile.name );
      
      avatarPhoto.push(photoFile);
      setData(userPhotoUploadForm);
      
      toast.show({
        title: 'Imagem carregada com sucesso.',
        placement: 'top',
        bgColor: 'green.500',
      })

    }
    catch(error){
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível adicionar a imagem do produto.'
      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    }
    finally{
      setPhotoIsLoading(false);
    }
  }

  function handleRemoveUserPhoto(uri: string){
    let removedItem = avatarPhoto.filter((item)=>item.uri!==uri);
    setAvatarPhoto(removedItem);
  }

  function handleGoBack(){
    navigation.navigate("home");
  }

  function handleSwitch(){
    switchActive ? setSwitchActive(false) : setSwitchActive(true);
  }

  return(
    <>
      <VStack bgColor="gray.600" px={7} flex={1}> 
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderAd onBack={handleGoBack} text="Criar Anúncio" />
          <Box mt={8}>
            <Text fontSize="md" color="gray.100" fontFamily="heading">
              Imagens
            </Text>
            <Text mt={2} fontSize="md" color="gray.100" fontFamily="body">
              Escolha até 3 imagens para mostrar o quanto o seu produto é incrível!
            </Text>
            
            <Box mt={3}>
              <HStack>
                <FlatList
                  horizontal
                  data={avatarPhoto}
                  renderItem={({item}) => (
                    <Box mr={2}>
                      <DefaultImageCard onRemove={() => handleRemoveUserPhoto(item.uri)} productUri={item.uri} />
                    </Box>
                  )}
                  ListEmptyComponent={<></>}
                  keyExtractor={(item) => item.uri}
                />
                <Box>
                  {avatarPhoto.length >= 3 ? (<></>) : (
                    <EmptyImageCard pressable={handleUserPhotoSelect} />
                  )}
                </Box>
              </HStack>
            </Box>
          
          </Box>
          <Box mt={8}>
            <Text fontSize="md" color="gray.100" fontFamily="heading">
              Sobre o produto
            </Text>
              <Controller
              control={control}
              name="name"
              render={({field: { onChange,value }})=> (
                <Input 
                  placeholder="Título do anúncio"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.name?.message}
                  mt={4}
                />
                )}
              />
              <Controller
              control={control}
              name="description"
              render={({field: { onChange,value }})=> (
                <Input 
                  placeholder="Descrição do produto"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.description?.message}
                  pb={32} h={40} mt={4}
                />
                )}
              />
              <HStack>
                <Controller
                  control={control}
                  name="is_new"
                  render={({field: { onChange,value }})=> (
                  <>
                    <Checkbox 
                      w={32}  mr={5}
                      rounded="full"  
                      text="Produto Novo"
                      onChange={onChange}
                      name="Novo"
                      value={value}
                      id="1"
                    />
                    <Checkbox 
                      rounded="full" mr={5} 
                      text="Produto Usado"
                      onChange={onChange}
                      name="Usado"
                      value={value}
                      id="2"
                    />
                  </>
                  )}
                />
              </HStack>
            <Box>
            <Text mt={8} fontSize="md" color="gray.100" fontFamily="heading">
              Venda
            </Text>
              <Controller
              control={control}
              name="price"
              render={({field: { onChange,value }})=> (
                <Input 
                  placeholder="Valor do produto" mt={4}
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.price?.message}
                />
                )}
              />
            </Box>
            <Box>
              <Text mt={4} fontSize="md" color="gray.100" fontFamily="heading">
                Aceita Troca?
              </Text>
              <HStack>
                <Controller
                control={control}
                name="accept_trade"
                render={({field: { onChange,value }})=> (
                  <Switch 
                  mt={4}
                  onChange={onChange}
                  size="lg"
                  value={value} 
                  offTrackColor="gray.500" 
                  onTrackColor="blue.700" 
                  onThumbColor="gray.700" 
                  offThumbColor="gray.50"  />
                  )}
                />
              </HStack>
            </Box>
            <Box>
              <Text mb={4} mt={4} fontSize="md" color="gray.100" fontFamily="heading">
                Meios de pagamentos aceitos
              </Text>
              <Box mb={18}>
                <Controller
                  control={control}
                  name="payment_methods"
                  render={({field: { onChange,value }})=> (
                  <>
                    <Checkbox 
                      text="Boleto"
                      onChange={onChange}
                      name="Boleto"
                      value={"boleto"}
                      id="1"
                    />
                    <Checkbox 
                      text="Pix"
                      onChange={onChange}
                      name="Pix"
                      value={"pix"}
                      id="2"
                    />
                    <Checkbox 
                      text="Dinheiro"
                      onChange={onChange}
                      name="Dinheiro"
                      value={"cash"}
                      id="3"
                    />
                    <Checkbox 
                      text="Cartão de Crédito"
                      onChange={onChange}
                      name="Cartão de Crédito"
                      value={"card"}
                      id="4"
                    />
                    <Checkbox 
                      text="Depósito Bancário"
                      onChange={onChange}
                      name="Depósito Bancário"
                      value={"deposit"}
                      id="5"
                    />
                  </>
                  )}
                />
              </Box>
            </Box>
          </Box>

        </ScrollView>       
      </VStack>
      <Box h={65} mt={7}>
        <Center>
          <HStack  >
            <Button onPress={handleGoBack} mr={3} sizeX="40" title="Cancelar" type="gray"/>
            <Button isLoading={isLoading} onPress={handleSubmit(onCheckboxFormSubmit)}  sizeX="40" title="Avançar" type="black"/>
          </HStack>
        </Center>
      </Box>
    </>
  )
}