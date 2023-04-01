import { Input as NativeBaseInput, IInputProps, FormControl } from "native-base"

  type Props = IInputProps 

export function Input({...rest}: Props){
 
  
  return (
      <NativeBaseInput  
      bg="gray.700"
      h="12"
      px="4"
      py="3"
      borderWidth={0}
      borderRadius="6"
      mb={4}
      fontSize="md"
      color="gray.200"
      fontFamily="regular"
      placeholderTextColor="gray.400"
      _focus={{
        bg: "gray.700",
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "gray.300"
      }}
      {...rest}
      />

  );
}