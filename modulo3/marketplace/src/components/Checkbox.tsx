import { Checkbox as CheckboxNativeBase, ICheckboxProps  } from "native-base";



type Props = ICheckboxProps & {
  text:string;
}

export function Checkbox({text,...rest}:Props){
  return(
    <CheckboxNativeBase 
    _pressed={{borderColor:"gray.400"}} _checked={{bgColor:"blue.700",borderColor:"blue.700"}} borderColor="gray.400" mt={2}
    {...rest}
    >
    {text}
    </CheckboxNativeBase>
  );
}