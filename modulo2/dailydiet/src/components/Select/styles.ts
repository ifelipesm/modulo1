import styled, { css } from 'styled-components/native';
import { Circle } from 'phosphor-react-native'
import { TextLabel } from '@components/Input/styles';
import { TouchableOpacity, View } from 'react-native';


export type SelectStyleProps = {
  selected?: boolean;
}

export const RedContainer = styled.View`
left: 8px;
`;

export const ButtonTouchableView = styled.TouchableOpacity`

  width: 159.5px;
  height: 50px;
  padding: 16px;

  border-radius: 6px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonTouchableViewGreen = styled(ButtonTouchableView)<SelectStyleProps>`
  ${({ theme,selected }) => css`
      background: ${ (selected) ?  theme.COLORS.GREEN_LIGHT :  theme.COLORS.GRAY_6 };
      border: ${(selected) ? theme.COLORS.GREEN_DARK : {} }
  `};
`;
export const ButtonTouchableViewRed= styled(ButtonTouchableView)<SelectStyleProps>`
  ${({ theme,selected }) => css`
      background: ${(selected) ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_6 };
      border: ${(selected) ?  theme.COLORS.RED_DARK : {} };
  `};
`;

export const DietText = styled.Text`
  width: 30px;
  height: 18px;

  ${({ theme })  =>  css`
    font-size: ${theme.FONT_SIZE.SM_2}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
  
  line-height: 18px;

  display: flex;
  align-items: center;
  text-align: center;
`;

export const DietIcon = styled(Circle).attrs<SelectStyleProps>(() => ({
  size: 8,
  weight: 'fill', 
}))`
width: 8px;
height: 8px;
right: 8px;
`;

export const DietIconRed = styled(DietIcon).attrs<SelectStyleProps>(({theme}) => ({
  color: theme.COLORS.RED_DARK,
}))``;
export const DietIconGreen = styled(DietIcon).attrs<SelectStyleProps>(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
}))``;


