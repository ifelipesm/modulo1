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
    left: 30px;
    right: 30px;
    top: 40px;
  `;

  export const DayHourRow = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    width: 327px;
    min-height: 76px;

    padding-top: 24px;
  `;

  export const SelectView = styled.View`
    width: 100%;
    min-height: 76px;
    padding-top: 24px;
  `;

  export const SelectRow = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 327px;
    height: 50px;

    margin-top: 8px;
  `;

  export const ButtonView = styled.View`
    top: 610px;
    right: 24px;
    padding: 16px 30px;
  `;
