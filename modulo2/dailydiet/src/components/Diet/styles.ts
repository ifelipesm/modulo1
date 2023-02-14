import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const Label = styled.View`
width: 138px;
height: 18px;

${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM_2}px;
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  line-height: 18px;
  
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;
export const ButtonInDiet = styled.Button`

width: 159.5px;
height: 50px;

padding: 16px;

${({ theme }) => css`
    background: ${theme.COLORS.GRAY_6};
  `}

border-radius: 6px;

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

`;
export const ButtonNotInDiet = styled(ButtonInDiet)`
left: 8px;

${({ theme }) => css`
    background: ${theme.COLORS.RED_LIGHT};
    border: 1px solid ${theme.COLORS.RED_DARK};
  `}
`;
