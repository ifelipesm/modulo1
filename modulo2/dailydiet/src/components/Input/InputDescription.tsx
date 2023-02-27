import { TextInput, TextInputProps } from 'react-native';
import { DescriptionBox, DescriptionLabel,DescriptionText,DescriptionView } from './styles';

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
  text: string;
}

export function InputDescription({text,inputRef, ...rest}:Props) {
  return (
    <DescriptionView>
      <DescriptionLabel >{text}</DescriptionLabel>
        <DescriptionBox>
          <DescriptionText ref={inputRef} {...rest}/>
        </DescriptionBox>
    </DescriptionView>
  );
}