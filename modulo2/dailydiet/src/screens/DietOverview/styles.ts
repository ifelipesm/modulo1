import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

  export const Container = styled(SafeAreaView)`
`;

  export const Meals = styled.View`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 0px 88px;

    position: absolute;
    max-height: 733px;
    left: 24px;
    right: 24px;
    top: 278px;

  `;

  export const NewContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    width: 327px;
    height: 79px;
    margin-bottom: 32px;
  `; 

  export const LabelNew = styled.Text`
    
    width: 69px;
    height: 21px;
   
   ${({ theme })  =>  css`
      font-size: ${theme.FONT_SIZE.MD_1}px;
      font-family: ${theme.FONT_FAMILY.REGULAR};
      color: ${theme.COLORS.GRAY_1};
    `};
    
    line-height: 21px;
    margin-bottom: 8px;
  
  `;

  export const SectionTitle = styled.Text`

    min-width: 74px;
    height: 23px;

    margin-top: 8px;
    margin-bottom: 8px;
    
    line-height: 23px;
    ${({ theme })  =>  css`
      font-size: ${theme.FONT_SIZE.MD_2}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.GRAY_1};
    `};

    display: flex;
    align-items: center;
  `;

  export const ListFooter  = styled.View`
  margin-bottom: 80%;
  `;