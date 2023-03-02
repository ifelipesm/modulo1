import { TextInput, TextInputProps } from 'react-native';
import { HourText, DateView, HourBox, HourLabel} from './styles';

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
  text: string;
}

export function InputHour({text,inputRef, ...rest}:Props) {
  return (
    <DateView>
      <HourLabel>{text}</HourLabel>
      <HourBox>
        <HourText ref={inputRef} {...rest} />
      </HourBox>
   </DateView>
  );
}