import { Input as NativeBaseInput,Box,HStack, useTheme } from "native-base";
import { MagnifyingGlass,  Sliders } from 'phosphor-react-native'
import DividerPng from '@assets/divider.svg';
import { TouchableOpacity } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { useProduct } from "@hooks/useProduct";
import { useFocusEffect } from "@react-navigation/native";

type Props = {
  onFilterPress: () => void;
  onQuerySearch: () => void;
}

export function SearchBar({onFilterPress,onQuerySearch}:Props){

  const { colors } = useTheme();
  const [inputQuery,setInputQuery] = useState('');
  const [isFocused,setIsFocused] = useState(false);
  const { searchQuery } = useProduct();

  function handleFocus(){
    if(isFocused === true){
      setIsFocused(false);
    }
    else{
      setIsFocused(true);
    }
  }
  
  useFocusEffect(useCallback(() => {
    searchQuery(inputQuery);
  },[handleFocus]));

  return(
    <>
      <NativeBaseInput
      w="full"
      h="12"
      backgroundColor="gray.700"
      borderColor="gray.700"
      borderRadius="md"
      fontSize="md"
      placeholderTextColor="gray.400"
      placeholder="Buscar anúncio"
      _focus={{
        borderColor:"gray.300",
        bgColor:"gray.700",
      }}
      value={inputQuery}
      onChangeText={setInputQuery}
      isFocused={isFocused}
      onFocus={handleFocus}
      />
      
      <Box position="absolute" mx={56}  >
        <HStack>
          <TouchableOpacity onPress={onQuerySearch} style={{ margin:10, marginRight:20}} >
            <MagnifyingGlass  color={colors.gray[200]}  />
          </TouchableOpacity>

            <DividerPng style={{ margin:13, marginRight:0}} />

          <TouchableOpacity onPress={onFilterPress} style={{margin:10, marginRight:0}}>
            <Sliders  color={colors.gray[200]}  />
          </TouchableOpacity>
        </HStack>
      </Box>
    </>
  )
}