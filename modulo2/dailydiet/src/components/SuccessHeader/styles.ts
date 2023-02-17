import { Text, View } from 'react-native';
import styled, { css } from 'styled-components/native';


  export type SuccessHeaderStyleProps = {
    diet: boolean;
  };

  export const HeaderContainer = styled(View)<SuccessHeaderStyleProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin-left: 32px;
    margin-right: 32px;

   
    width: 311px;
    height: ${({diet}) => css` ${diet ? 60 : 81}`}px;
    top: 160px;
    
  `;

  export const HeaderTitle = styled(Text)<SuccessHeaderStyleProps>`
    
    min-width: 113px;
    min-height: 31px;

    ${({theme,diet}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${ diet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    `}
    line-height: 31px;

    margin-bottom: 8px;
  `;

  export const HeaderText = styled(Text)<SuccessHeaderStyleProps>`

    min-width: 311px;
    min-height: 42px;

    ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD_1}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
    `}
    line-height: 21px;

    text-align: center;
  `;

  export const B = styled.Text`
    ${({theme}) => css`
      font-size: ${theme.FONT_SIZE.MD_1}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.GRAY_1};
    `}
    line-height: 21px;

    text-align: center;
  `;

  export const ImageOnDiet = styled.Image`

    position: absolute;
    width: 224px;
    height: 288px;
    top: 100px;
    
  `;
  export const ImageOutOfDiet = styled.Image`

    position: absolute;
    width: 224px;
    height: 288px;
    top: 120px;
  `;
