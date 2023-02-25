import styled, { css } from 'styled-components/native';

export const DietStatsContent = styled.View`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 168px;
  bottom: 0px;
  border-radius: 20px;

  ${({ theme })  =>  css`
      color: ${theme.COLORS.WHITE};
    `};
`;

export const DietStatsData = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-top: 23px;

  position: absolute;
  height: 309px;
  left: 32px;
  right: 32px;
  top: 74px;

`;

export const Title = styled.Text`
  position: absolute;
  min-width: 118px;
  height: 18px;
  left: 135px;
  top: 66px;
  
  display: flex;
  align-items: center;


  ${({ theme })  =>  css`
      font-size: ${theme.FONT_SIZE.SM_2}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.GRAY_1};
    `};
    line-height: 18px;
`

export const DietCardBox = styled.View`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 12px;

width: 327px;
height: 107px;
`;