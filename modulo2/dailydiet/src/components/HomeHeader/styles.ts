import styled from 'styled-components/native';

  export const Container = styled.View`
  align-items:center;
  `;

  export const Logo = styled.Image`
  position: absolute;
  width: 82px;
  height: 37px;
  left: 24px;
  top: 66px;
  `;

  export const Avatar = styled.Image`
  box-sizing: border-box;

  position: absolute;
  width: 40px;
  height: 40px;
  right: 24px;
  top: 64px;

  border: 2px solid ${({theme}) => theme.COLORS.GRAY_2};
  border-radius: 999px;
  `;
