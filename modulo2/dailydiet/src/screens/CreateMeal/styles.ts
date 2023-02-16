import styled, { css } from 'styled-components/native';

export const Background = styled.View`
  position: absolute;
  height: 132px;
  left: 0px;
  right: 0px;
  top: 0px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const Content = styled.View`
position: absolute;
left: 0px;
right: 0px;
top: 104px;
bottom: 0px;

background-color: ${({ theme }) => theme.COLORS.GRAY_7};
box-shadow: 0px 0px 30px;
border-radius: 20px;
`;

export const Form = styled.Text`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: absolute;
height: 430px;
left: 24px;
right: 24px;
top: 40px;
`;

export const DayHourView = styled.View`
display: flex;
flex-direction: row;
align-items: flex-start;

width: 327px;
height: 70px;

`;

export const SelectView = styled.View`

display: flex;
flex-direction: column;
align-items: flex-start;

width: 100%;
height: 76px;

`;

export const SelectRow = styled.View`
display: flex;
flex-direction: row;
align-items: center;

width: 327px;
height: 50px;

margin-top: 8px;
`;

