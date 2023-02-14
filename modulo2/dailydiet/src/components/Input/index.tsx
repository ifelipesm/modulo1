import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { 
  Container, 
  InputView, 
  NameLabel,
  DescriptionLabel,
  DateLabel, 
  HourLabel, 
  NameBox, 
  DescriptionBox, 
  DateBox, 
  HourBox, 
} from './styles';

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
  label: string;
}

export function Input({label='',inputRef, ...rest}:Props) {
  return (
    <Container>
      {label === 'Name' ? 
      <>
        <NameLabel>{label}</NameLabel>
        <NameBox />
      </>
      :
      <></>
      }
      {label === 'Descrição' ? 
      <InputView>
        <DescriptionLabel >{label}</DescriptionLabel>
        <DescriptionBox/>
      </InputView>
      :
      <></>
      }
      {label === 'Data'  ? 
        <InputView>
          <DateLabel>{label}</DateLabel>
          <DateBox/>
        </InputView>
      :
      <></>
      }
      {label === 'Hora' ? 
        <InputView>
          <HourLabel>{label}</HourLabel>
          <HourBox/>
        </InputView>
      :
      <></>
      }
       {label === 'Está dentro da dieta?' ? 
        <InputView>
          <HourLabel>{label}</HourLabel>
          <HourBox/>
        </InputView>
      :
      <></>
      }
    </Container>
    );
}