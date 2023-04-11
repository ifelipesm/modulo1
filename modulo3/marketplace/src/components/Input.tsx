import { useFocusEffect } from "@react-navigation/native";
import { Input as NativeBaseInput, IInputProps, FormControl, Button, Box } from "native-base"
import { Eye,EyeClosed } from "phosphor-react-native"
import { useCallback, useEffect } from "react";
import { TouchableOpacity } from "react-native";

  type Props = IInputProps & {
  errorMessage?: string | null;
  field?: string;
  isShown?: boolean;
  isShownPasswordConfirm?: boolean;
  onTogglePassword?: () => void;
  onTogglePasswordConfirm?: () => void;
  }

export function Input({errorMessage = null,field,isShown,isShownPasswordConfirm,onTogglePassword,onTogglePasswordConfirm,isInvalid,...rest}: Props){
  const invalid = !!errorMessage || isInvalid;
  
  useEffect(()=>{
    onTogglePassword
  },[isShown])
  
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
      isInvalid={invalid}
      _invalid={{
        borderWidth:1,
        borderColor: "red.500"
      }}
      _focus={{
        bg: "gray.700",
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "gray.300"
      }}
      {...rest}
      />
        {
          field=== 'password' ?
            <TouchableOpacity onPress={onTogglePassword}>
              <Box
              bg="gray.700"
              w="5"
              h="5"
              alignItems="center"
              position="absolute"
              right="1/6"
              left="64"
              bottom="3"
              >
            {
              isShown === false ?
                <Eye color="gray" size="20"  />
                :
                <EyeClosed color="gray" size="20"/>
            }
              </Box>
            </TouchableOpacity>
          :
          field === 'passwordConfirm' ?
            <TouchableOpacity onPress={onTogglePasswordConfirm}>
              <Box
              bg="gray.700"
              w="5"
              h="5"
              alignItems="center"
              position="absolute"
              right="1/6"
              left="64"
              bottom="3"
              >
            {
              isShownPasswordConfirm == false ?
                <Eye color="gray" size="20"  />
                :
                <EyeClosed color="gray" size="20"/>
            }
              </Box>
            </TouchableOpacity>
          :
          <></>
        }
      <FormControl.ErrorMessage mt={0} _text={{color: "red.500",fontSize:'sm'}} >
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}