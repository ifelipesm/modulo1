import { Box,Text } from "native-base";
import { Button } from "./Button";

type Props = {
  title: string;
  label: string;
  action: () => void;
}

export function AuthFooter({title, label,action}:Props){
  return (
  <Box mb={20}>
    <Text color="gray.200" textAlign="center" fontSize="sm" fontFamily="body" mb={4} >
      {label}
    </Text>
    <Button title={title} type="gray" onPress={action} />
  </Box>
  )
}