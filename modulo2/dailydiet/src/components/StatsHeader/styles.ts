import styled, { css } from 'styled-components/native';

export type StatsHeaderStyleProps = {
  percentage: number;
}

export const StatsHeaderContainer = styled.View<StatsHeaderStyleProps>`
  position: absolute;
  height: 200px;
  left: 0px;
  right: 0px;
  top: 0px;
  ${({ theme,percentage })  =>  css`
      background: ${percentage > 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    `};
  
`;

export const TextBox = styled.View`
  display: flex;
  align-items: center;
  text-align: center;
`

export const StatsHeaderTitle = styled.Text`
  position: absolute;
  min-width: 115px;
  height: 42px;
  top: 72px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 2px;

  ${({ theme })  =>  css`
      font-size: ${theme.FONT_SIZE.XL}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.GRAY_1};
    `};
    line-height: 42px;
`;

export const StatsHeaderDescription = styled.Text`
  position: absolute;
  min-height: 18px;
  left: 24px;
  right: 24px;
  top: 116px;

  display: flex;
  align-items: center;
  text-align: center;

  ${({ theme })  =>  css`
      font-size: ${theme.FONT_SIZE.SM_2}px;
      font-family: ${theme.FONT_FAMILY.REGULAR};
      color: ${theme.COLORS.GRAY_2};
    `};
    line-height: 16px;

`;