import { Text, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

  export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

  type Props = {
    type: ButtonTypeStyleProps;
  }

export const Container = styled(TouchableOpacity)<Props>`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;

  position: absolute;
  height: 50px;
  left: 24px;
  right: 24px;
  bottom: 40px;

  border-radius: 6px;
  ${({ theme,type })  =>  css`
  background: ${type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
  border: 1px solid ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  `}
  border-radius: 6px;
`;

export const Title = styled(Text)<Props>`

  width: 130px;
  height: 18px;


  ${({ theme,type })  =>  css`
  font-size: ${theme.FONT_SIZE.SM_2}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  `};
  line-height: 18px;
  display: flex;
  align-items: center;

`;