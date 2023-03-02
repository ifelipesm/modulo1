import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 327px;
  height: 76px;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  width: 327px;
  min-height: 26px;
  padding-bottom: 8px;
  
  ${({ theme })  =>  css`
      font-size: ${theme.FONT_SIZE.MD_3}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.GRAY_1};
    `};
  line-height: 26px;

`;

export const Description = styled.Text`
  width: 327px;
  min-height: 42px;

  ${({ theme })  =>  css`
      font-size: ${theme.FONT_SIZE.MD_1}px;
      font-family: ${theme.FONT_FAMILY.REGULAR};
      color: ${theme.COLORS.GRAY_2};
    `};
  line-height: 26px;
`;