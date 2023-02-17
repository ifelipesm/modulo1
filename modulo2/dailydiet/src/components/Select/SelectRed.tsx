import { TouchableOpacityProps } from 'react-native';
import { ButtonTouchableViewRed, DietIconRed, DietText, RedContainer, SelectStyleProps } from './styles';

type Props = TouchableOpacityProps & SelectStyleProps & {
  text: string;
  pressed: () => void;
}

export function SelectRed({pressed,selected=false,text, ...rest}:Props) {
  return (
    <RedContainer>
      <ButtonTouchableViewRed onPress={pressed} selected={selected} {...rest}>
        <DietIconRed />
        <DietText>{text}</DietText>
      </ButtonTouchableViewRed>      
    </RedContainer>
  );
}