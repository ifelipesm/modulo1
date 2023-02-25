import { Circle } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

  export const Container = styled(TouchableOpacity)`

    width: 345px;
    height: 49px;
    padding: 14px 16px 14px 12px;
    
    display: flex;
    flex-direction: row;
    align-items: center;

    box-sizing: border-box;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_5};
    border-radius: 6px;

    margin-bottom: 8px;
    
  `;

  export const Hour = styled.Text`

    width: 32px;
    height: 16px;

    ${({ theme })  =>  css`
      font-size: ${theme.FONT_SIZE.SM_1}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.GRAY_1};
    `};
    line-height: 16px;

  `;
  export const Meal = styled.Text`

    width: 217px;
    height: 21px;

    ${({ theme })  =>  css`
      font-size: ${theme.FONT_SIZE.MD_1}px;
      font-family: ${theme.FONT_FAMILY.REGULAR};
      color: ${theme.COLORS.GRAY_2};
    `};
    line-height: 21px;

    margin-left: 12px;
    margin-right: 12px;
  `;

  export const Icon = styled.Image`

    width: 0px;
    height: 14px;

    border: 1px solid ${({theme}) => theme.COLORS.GRAY_4};
    margin-left: 12px;
    margin-right: 12px;
  `;

  export const StatusGreen = styled(Circle).attrs(({theme})=>({
      color: theme.COLORS.GREEN_MID,
      size: 14,
      weight: 'fill',
    }))`
    width: 14px;
    height: 14px;
    margin-right: 12px;
  `;
  
  export const StatusRed = styled(Circle).attrs(({theme})=>({
      color: theme.COLORS.RED_MID,
      size: 14,
      weight: 'fill',
    }))`
    width: 14px;
    height: 14px;
    margin-right: 12px;
  `;

