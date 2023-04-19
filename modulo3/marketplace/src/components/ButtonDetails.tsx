import { Button as ButtonNativeBase, HStack, IButtonProps, Text, useTheme } from "native-base"
import { Power, Trash } from "phosphor-react-native";

type Props = IButtonProps & {
  title: string;
  type?: string;
  sizeX?: string;
}

export function ButtonDetails({title,type="blue",sizeX, ...rest}:Props){
  
  const theme = useTheme();

    const bgColor = {
        blue: {
            default: theme.colors.blue['700'],
            pressed: theme.colors.blue['500'],
        },
        black: {
            default: theme.colors.gray['100'],
            pressed: theme.colors.gray['200'],
        },
        gray: {
            default: theme.colors.gray['500'],
            pressed: theme.colors.gray['400'],
        }
    } as any ;
  
  return (
    <ButtonNativeBase 
    w={sizeX ? sizeX : 'full'}
    h={12}
    bg={bgColor[type].default}
    borderRadius="lg"
    _pressed={{
        backgroundColor: bgColor[type].pressed
      }}
    {...rest}
    >
      <HStack alignItems="center" justifyContent="center">
        {
          type === 'black' || type==='blue' ?
          <Power color={theme.colors.gray[700]} />
          :
          <Trash color={theme.colors.gray[200]} />
        }
        
        <Text
        ml={2} 
        color={type === 'black' || type==='blue' ? "gray.700" : "gray.200"}
        fontFamily="heading" 
        fontSize="sm">
          {title}
        </Text>
      </HStack>
    </ButtonNativeBase>
  );
}