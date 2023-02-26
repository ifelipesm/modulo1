import styled, { css } from 'styled-components/native';

export const Content = styled.View`

  position: absolute;
  left: 0px;
  right: 0px;
  top: 104px;
  bottom: 0px;

  ${({theme}) => css`
    background: ${theme.COLORS.GRAY_7};
  `}

  border-radius: 20px;

`;
export const Info = styled.View`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  height: 205px;
  left: 24px;
  right: 24px;
  top: 40px;
`;

export const ButtonBox = styled.View`

  position: absolute;
  height: 50px;
  left: 0px;
  right: 48px;
  bottom: 99px;

`;