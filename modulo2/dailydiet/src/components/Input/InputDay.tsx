import { TextInput, TextInputProps } from 'react-native';
import { DayBox, DayLabel, DateView, DayText } from './styles';


type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  text: string;
}

export function InputDay({text,inputRef, ...rest}:Props) {
  return (
    <DateView>
      <DayLabel>{text}</DayLabel>
      <DayBox>
        <DayText  ref={inputRef} multiline={true} numberOfLines={5} {...rest} />
      </DayBox>
    </DateView>
  );
}