
import { TextInput, View } from 'react-native';
import styled, { css } from 'styled-components/native';

  export const NameView = styled.View`
    width: 100%;
    min-height: 70px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;

  export const DescriptionView = styled.View`
    width: 100%;
    min-height: 142px;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding-top: 24px;
  `;

  export const DateView = styled.View`
  
    width: 153.5px;
    min-height: 70px;
    max-height: 70px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

  `;

  export const TextInputBorder = styled(View)`

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
    border-radius: 6px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 14px;

  `;

  export const TextLabel = styled.Text`
    
    ${({ theme })  =>  css`
      font-size: ${theme.FONT_SIZE.SM_2}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.GRAY_2};
    `};
    
    line-height: 18px;
    margin-bottom: 4px;

  `;

  export const TextInputFont = styled(TextInput)`

    ${({ theme })  =>  css`
      font-size: ${theme.FONT_SIZE.MD_1}px;
      font-family: ${theme.FONT_FAMILY.REGULAR};
      color: ${theme.COLORS.GRAY_1};
    `};
    line-height: 21px;

  `;

  export const NameLabel = styled(TextLabel)`
    width: 39px;
    height: 18px;
  `;

  export const NameBox = styled(TextInputBorder)`
    width: 327px;
    height: 48px;
  `;  

  export const NameText = styled(TextInputFont)`
    width: 299px;
    height: 20px;
  `;

  export const DescriptionLabel = styled(TextLabel)`
    width: 64px;
    height: 18px; 
  `;

  export const DescriptionBox = styled(TextInputBorder)`
    width: 327px;
    height: 120px;
  `;

  export const DescriptionText = styled(TextInputFont)`
    width: 299px;
    height: 92px;

  `;

  export const DayLabel = styled(TextLabel)` 
    width: 32px;
    height: 18px;  

  `;

  export const DayBox = styled(TextInputBorder)`
    width: 153.5px;
    height: 48px;
  `;
  
  export const HourLabel = styled(DayLabel)`
    left: 20px;
  `;

  export const HourBox = styled(DayBox)`
    left: 20px;
  `;

  export const DayText = styled(TextInputFont)`
    width: 125.5px;
    height: 20px;
  `;
  
  export const HourText = styled(TextInputFont)`
    width: 125.5px;
    height: 20px;
  `;

  export const DietLabel = styled(TextLabel)`
    width: 150px;
    height: 18px;
  `;




