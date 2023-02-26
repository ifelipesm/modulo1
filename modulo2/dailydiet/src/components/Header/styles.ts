import styled, { css } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

type HeaderStyleProps = {
  dietType?: boolean;
}

export const Background = styled.View<HeaderStyleProps>`
  position: absolute;
  height: 132px;
  left: 0px;
  right: 0px;
  top: 0px;
  background-color: ${({ theme,dietType }) => dietType? (dietType ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT) : theme.COLORS.GRAY_5 };
`;

export const Title = styled.Text`
  position: absolute;
  width: 130px;
  right: 131px;
  height: 24px;
  top: 57px;
  ${({ theme })  =>  css`
    font-size: ${theme.FONT_SIZE.MD_2}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
`;

