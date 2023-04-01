import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string;
  variant?: 'blue' | 'gray';
}

export function Button({title,variant="blue", ...rest}:Props){
  return (
    <ButtonNativeBase
    w="full"
    h={12}
    bg={variant === "blue" ? "blue.500" : "gray.500" }
    borderRadius="lg"
    _pressed={{
        backgroundColor: variant === "blue" ? "blue.500" : "gray.500" 
      }}
    {...rest}
    >
      <Text 
      color={variant === "blue" ? "gray.700" : "gray.200" }
      fontFamily="heading" 
      fontSize="sm">
        {title}
      </Text>
    </ButtonNativeBase>
  );
}