import { Button as ButtonNativeBase, HStack, IButtonProps, Icon, Text, useTheme } from "native-base"
import { Tag,ArrowLeft } from 'phosphor-react-native'

type Props = IButtonProps & {
  title: string;
  type?: "blue" | "gray" | "black";
  sizeX: string;
}

export function Button({title,type="blue",sizeX, ...rest}:Props){
  
  const theme = useTheme();

    const bgColor = {
        blue: {
            default: theme.colors.blue['500'],
            pressed: theme.colors.blue['700'],
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
    w={sizeX}
    h={12}
    bg={bgColor[type].default}
    borderRadius="lg"
    _pressed={{
        backgroundColor: bgColor[type].pressed
      }}
    {...rest}
    >
      <HStack>
        <Tag color={bgColor[type].default} />
        <Text 
        color={type === "blue" || type === "black" ? "gray.700" : "gray.200" }
        fontFamily="heading" 
        fontSize="sm">
          {title}
        </Text>
      </HStack>
    </ButtonNativeBase>
  );
}