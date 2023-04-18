import { Button as ButtonNativeBase, HStack, IButtonProps, Text, useTheme } from "native-base"
import { Tag, ArrowLeft } from 'phosphor-react-native';

type Props = IButtonProps & {
  title: string;
  type?: "blue" | "gray";
  sizeX: string;
}

export function ButtonPreview({title,type="blue",sizeX, ...rest}:Props){
   
  const theme = useTheme();

    const bgColor = {
        blue: {
            default: theme.colors.blue['700'],
            pressed: theme.colors.blue['500'],
        },
        gray: {
            default: theme.colors.gray['500'],
            pressed: theme.colors.gray['400'],
        }
    } as any ;

  return(
  <ButtonNativeBase 
    w={sizeX}
    h={12}
    bg={bgColor[type].default}
    borderRadius="lg"
    _pressed={{
        backgroundColor: bgColor[type].pressed
      }}
    {...rest}
    >
      <HStack alignItems="center">
        { type === 'blue' ?
          <Tag size={16} color={theme.colors.gray['700']}/>
          :
          <ArrowLeft size={16} color={theme.colors.gray['100']}/>
        }
        <Text
        ml={3} 
        color={type === "blue" ? "gray.700" : "gray.200" }
        fontFamily="heading" 
        fontSize="sm">
          {title}
        </Text>
      </HStack>
    </ButtonNativeBase>
  )
}