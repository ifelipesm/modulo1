import { TextInput, TextInputProps } from 'react-native';
import { NameView, NameBox, NameLabel, NameText } from './styles';

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
  text: string;
}

export function InputName({text,inputRef, ...rest}:Props) {
  return (
    <NameView>
      <NameLabel>{text}</NameLabel>
      <NameBox >
        <NameText ref={inputRef} {...rest}/>
      </NameBox>
    </NameView>
  );
}