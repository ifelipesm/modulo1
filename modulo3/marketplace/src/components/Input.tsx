import { Input as NativeBaseInput, IInputProps, FormControl } from "native-base"

  type Props = IInputProps & {
  errorMessage?: string | null;
  }

export function Input({errorMessage = null,isInvalid,...rest}: Props){
  const invalid = !!errorMessage || isInvalid;
 
  
  return (
    <FormControl isInvalid={invalid} mb={4} >
      <NativeBaseInput  
      bg="gray.700"
      w="full"
      h="12"
      px="4"
      py="3"
      borderWidth={0}
      borderRadius="6"
      fontSize="md"
      color="gray.200"
      fontFamily="body"
      placeholderTextColor="gray.400"
      _focus={{
        bg: "gray.700",
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "gray.300"
      }}
      {...rest}
      />
      <FormControl.ErrorMessage mt={0} _text={{color: "red.500",fontSize:'sm'}} >
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}