import styled from 'styled-components/native';

export const Container = styled.View`
position: absolute;
left: 0px;
right: 0px;
top: 104px;
bottom: 0px;

background-color: ${({ theme }) => theme.COLORS.GRAY_7};
box-shadow: 0px 0px 30px;
border-radius: 20px;
`;

export const FormArea = styled.Text`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 24px;

position: absolute;
height: 430px;
left: 24px;
right: 24px;
top: 40px;
`;

export const NameInput = styled.TextInput`

`;

export const DescriptionInput = styled.TextInput`

`;

export const DateInput = styled.TextInput`

`;

export const SelectHealthy = styled.Button`

`;

export const SelectUnhealthy = styled.Button`

`;