import styled, { css } from 'styled-components/native';

export const StatsCardContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin-bottom: 12px;

  width: 327px;
  height: 89px;

  ${({ theme })  =>  css`
      background: ${theme.COLORS.GRAY_5};
    `};
    border-radius: 8px;
`;

export const TextTheme = styled.Text`
`;

export const StatsNumber = styled(TextTheme)`
  min-width: 29px;
  height: 31px;
  ${({ theme })  =>  css`
    font-size: ${theme.FONT_SIZE.MD_2}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
  line-height: 31px;
  margin-bottom: 8px;
  text-align: center;
`
export const StatsText = styled(TextTheme)`
  width: 295px;
  height: 18px;
  ${({ theme })  =>  css`
    font-size: ${theme.FONT_SIZE.SM_2}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `};
  line-height: 18px;
  text-align: center;

`