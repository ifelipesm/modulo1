import styled, { css } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';

export const Background = styled.View`
  position: absolute;
  height: 132px;
  left: 0px;
  right: 0px;
  top: 0px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
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
  `};
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const Icon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  left: 24px;
  top: 56px;
`