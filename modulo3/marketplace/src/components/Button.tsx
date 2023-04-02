import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string;
  variant?: 'blue' | 'gray' | 'black';
}

export function Button({title,variant="blue", ...rest}:Props){
  return (
    <ButtonNativeBase
    w="full"
    h={12}
    bg={variant === "blue" ? "blue.500" : ( variant === 'gray' ? "gray.500" : "gray.100" )  }
    borderRadius="lg"
    _pressed={{
        backgroundColor: variant === "blue" ? "blue.500" : ( variant === 'gray' ? "gray.500" : "gray.100" )
      }}
    {...rest}
    >
      <Text 
      color={variant === "blue" ? "gray.700" : (variant === "gray" ? "gray.200" : "gray.700")  }
      fontFamily="heading" 
      fontSize="sm">
        {title}
      </Text>
    </ButtonNativeBase>
  );
}