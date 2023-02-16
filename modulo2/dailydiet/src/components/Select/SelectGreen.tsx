import { TouchableOpacityProps } from 'react-native';
import { ButtonTouchableViewGreen, DietIconGreen, DietText, SelectStyleProps } from './styles';

type Props = TouchableOpacityProps & SelectStyleProps & {
  text: string;
  pressed: () => void;
}

export function SelectGreen({pressed,selected=false,text, ...rest}:Props) {
  return (
    <ButtonTouchableViewGreen onPress={pressed} selected={selected} {...rest}>
      <DietIconGreen />
      <DietText>{text}</DietText>
    </ButtonTouchableViewGreen>      
  );
}