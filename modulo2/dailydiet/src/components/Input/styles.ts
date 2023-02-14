import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
`;

export const InputView = styled.View`
margin-top: 24px;
`;

export const NameLabel = styled.Text`
  width: 39px;
  height: 18px;
  
  ${({ theme })  =>  css`
    font-size: ${theme.FONT_SIZE.SM_2}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `};
  line-height: 18px;
  margin-bottom: 4px;
`;

export const NameBox = styled(TextInput)`
width: 327px;
height: 48px;

border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
border-radius: 6px;
box-sizing: border-box;
`;


export const DescriptionLabel = styled.Text`
  width: 64px;
  height: 18px;

  ${({ theme })  =>  css`
    font-size: ${theme.FONT_SIZE.SM_2}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `};
  line-height: 18px;
  margin-bottom: 4px;
`

export const DescriptionBox = styled(TextInput)`
  width: 327px;
  height: 120px;

  padding: 14px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;

`;


export const DateLabel = styled.Text` 
  width: 32px;
  height: 18px;
  
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM_2}px;
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  line-height: 18px;
  
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`

export const DateBox = styled.TextInput`
  width: 153.5px;
  height: 48px;
  
  padding: 14px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const HourBox = styled(DateBox)`
  left: 20px;
`

export const HourLabel = styled(DateLabel)`
  left: 20px;
  margin-bottom: 4px;
`;

