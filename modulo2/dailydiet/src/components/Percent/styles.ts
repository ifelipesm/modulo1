import styled, { css } from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native';

  type PercentStyleProps = {
    percentage: number;
  }

  export const Container = styled(TouchableOpacity)<PercentStyleProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding: 20px 16px;
    isolation: isolate;

    position: absolute;
    height: 102px;
    left: 24px;
    right: 24px;
    top: 136px;

    background: ${({theme,percentage}) => percentage > 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border-radius: 8px;
  `;

  export const Title = styled.Text`
    min-width: 115px;
    height: 42px;

    ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_1};
    `};
    line-height: 42px;

    display: flex;
    align-items: center;
    text-align: center;

  `;

  export const Subtitle = styled.Text`
    width: 295px;
    height: 18px;

    ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM_2}px;
    color: ${theme.COLORS.GRAY_2};
    `};
    line-height: 18px;

    display: flex;
    align-items: center;
    text-align: center;
      
  `;

  export const IconArrow = styled(ArrowUpRight).attrs<PercentStyleProps>(({theme,percentage}) => ({
    size: 24,
  }))`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 8px;
  top: 8px;
  `