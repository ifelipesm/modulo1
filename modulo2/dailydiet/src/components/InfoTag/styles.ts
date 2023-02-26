import { DietIcon } from '@components/Select/styles';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;

  min-width: 144px;
  height: 34px;

  background: ${({theme}) => theme.COLORS.GRAY_6};
  border-radius: 1000px;

`;

export const Icon = styled(DietIcon)``;

export const Title = styled.Text`

  min-width: 96px;
  height: 18px;

  ${({theme}) =>  css`
  font-size: ${theme.FONT_SIZE.SM_2}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_1};
  `}
  line-height: 18px;

  display: flex;
  align-items: center;
  text-align: center;

`;