import { Button as ButtonNativeBase, IButtonProps, Text, useTheme } from "native-base"

type Props = IButtonProps & {
  title: string;
  type?: "blue" | "gray" | "black";
}

export function Button({title,type="blue", ...rest}:Props){
  
  const theme = useTheme();

    const bgColor = {
        blue: {
            default: theme.colors.lightBlue['500'],
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
    w="full"
    h={12}
    bg={bgColor[type].default}
    borderRadius="lg"
    _pressed={{
        backgroundColor: bgColor[type].pressed
      }}
    {...rest}
    >
      <Text 
      color={type === "blue" || type === "black" ? "gray.700" : "gray.200" }
      fontFamily="heading" 
      fontSize="sm">
        {title}
      </Text>
    </ButtonNativeBase>
  );
}