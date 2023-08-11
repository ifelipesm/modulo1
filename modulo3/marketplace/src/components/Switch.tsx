import { Switch as SwitchNativeBase, FormControl, ICheckboxProps  } from "native-base";



type Props = ICheckboxProps & {
  text:string;
  value: boolean;
}

export function Checkbox({text,value}:Props){

  return(
    <FormControl  mb={4} >
      <SwitchNativeBase 
        mt={4}
        value={value}
        size="lg" 
        offTrackColor="gray.500" 
        onTrackColor="blue.700" 
        onThumbColor="gray.700" 
        offThumbColor="gray.50"  
      >
      {text}
      </SwitchNativeBase>
    </FormControl>
  );
}