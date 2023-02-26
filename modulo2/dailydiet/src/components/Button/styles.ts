import { Text, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { PencilSimpleLine, Plus, Trash } from 'phosphor-react-native'

  export type ButtonTypeStyleProps = 'PRIMARY' | 'REMOVE' | 'EDIT';

  type Props = {
    type: ButtonTypeStyleProps;
  }

  export const BaseContainer = styled(TouchableOpacity)`
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 16px 24px;
    border-radius: 6px;

  `;

  export const BaseTitle = styled(Text)`

      display: flex;
      align-items: center;
      
      ${({ theme })  =>  css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.SM_2}px;
      `};
      line-height: 18px;

  `;

  export const Container = styled(BaseContainer)<Props>`

    height: 50px;
    left: 24px;
    right: 24px;
    bottom: 40px;
    margin-bottom: 9px;

    ${({ theme,type })  =>  css`
    background: ${type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
    border: 1px solid ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    `}
  `;

  export const Title = styled(BaseTitle)<Props>`
    width: 130px;
    height: 18px;
    text-align: center;

    ${({ theme,type })  =>  css`
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    `};
  `;

  export const ContainerNew = styled(BaseContainer)`
    min-width: 345px;
    min-height: 55px;

    ${({ theme })  =>  css`
    background: ${theme.COLORS.GRAY_2};
    `};
  `;
  
  export const TitleNew = styled(BaseTitle)`
    min-width: 89px;
    height: 18px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  `;

  export const IconNew = styled(Plus).attrs(  ({ theme }) => ({
    size: 18,
    color: theme.COLORS.WHITE,
  }))`
    width: 18px;
    height: 18px;
    right: 12px;
  `;

export const IconEdit = styled(PencilSimpleLine).attrs(  ({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))`
  width: 18px;
  height: 18px;
  right: 12px;
`;

export const IconRemove = styled(Trash).attrs(  ({ theme }) => ({
  size: 18,
  color: theme.COLORS.GRAY_1,
}))`
  width: 18px;
  height: 18px;
  right: 12px;
`;

  


