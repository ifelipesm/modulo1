import { GoBack } from '@components/GoBack';
import React from 'react';
import { StatsHeaderContainer, StatsHeaderDescription, StatsHeaderTitle, TextBox } from './styles';

type Props = {
  redirect: ()=> void,
  percentageValue: number,
}

export function StatsHeader({redirect, percentageValue=0}:Props) {
  return (
    <StatsHeaderContainer percentage={percentageValue} >
        <GoBack redirect={redirect} percentage={percentageValue}/>
        <TextBox>
        <StatsHeaderTitle>{percentageValue}%</StatsHeaderTitle>
        <StatsHeaderDescription>das refeições dentro da dieta</StatsHeaderDescription>
        </TextBox>
    </StatsHeaderContainer>
  );
}