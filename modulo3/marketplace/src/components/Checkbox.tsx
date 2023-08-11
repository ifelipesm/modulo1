import { Checkbox as CheckboxNativeBase, FormControl, ICheckboxProps  } from "native-base";



type Props = ICheckboxProps & {
  text:string;
  errorMessage?: string | null;
}

export function Checkbox({text,errorMessage,isInvalid,...rest}:Props){
  const invalid = !!errorMessage || isInvalid;

  return(
    <FormControl isInvalid={invalid} mb={4} >
      <CheckboxNativeBase 
      mt={2}
      _pressed={{borderColor:"gray.400"}} 
      _checked={{bgColor:"blue.700",borderColor:"blue.700"}} 
      borderColor="gray.400" 
      isInvalid={invalid}
      _invalid={{
        borderWidth:1,
        borderColor: "red.500"
      }}
      {...rest}
      >
      {text}
      </CheckboxNativeBase>
      <FormControl.ErrorMessage mt={0} _text={{color: "red.500",fontSize:'sm'}} >
          {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}