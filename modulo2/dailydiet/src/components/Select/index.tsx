import { TouchableOpacityProps } from 'react-native';
import 
{ 
  ButtonTouchableView, 
  DietIcon, 
  DietIconGreen, 
  DietIconRed, 
  DietText, 
  GreenContainer, 
  RedContainer, 
  SelectStyleProps
} 
from './styles';

type Props = TouchableOpacityProps & SelectStyleProps & {
  text: string;
  pressGreen: () => void;
  pressRed: () => void;
}

export function Select({pressGreen,pressRed,selected=false,text, type='GREEN',...rest}:Props) {
  return (
    <>
    { type === 'GREEN' 
    ?   
      <ButtonTouchableView onPress={pressGreen} type={type} selected={selected} {...rest}>
        <DietIconGreen />
        <DietText>{text}</DietText>
      </ButtonTouchableView>          

    : type === 'RED' ?
    <RedContainer>
      <ButtonTouchableView onPress={pressRed} type={type} selected={selected} {...rest}>
        <DietIconRed />
        <DietText>{text}</DietText>
      </ButtonTouchableView> 
    </RedContainer>
    : <></>
    }   
    </>
  );
}