import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const ContainerSuccessButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;

  
  width: 191px;
  height: 50px;
  top: 520px;
  margin-left: 92px;
  margin-right: 92px;

  background: ${({theme}) => css`${theme.COLORS.GRAY_2}`};
  border-radius: 6px;
`;

export const LabelSuccessButton = styled.Text`
width: 143px;
height: 18px;

display: flex;
align-items: center;

${({ theme })  =>  css`
  font-size: ${theme.FONT_SIZE.SM_2}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.WHITE};
  `};
  line-height: 18px;
`;