import { GoBack } from '@components/GoBack';
import { StatsHeaderContainer, StatsHeaderDescription, StatsHeaderTitle, TextBox } from './styles';

type Props = {
  redirect: ()=> void,
  percentageValue: number,
  percentageText: string,
}

export function StatsHeader({redirect, percentageValue=0,percentageText}:Props) {
  return (
    <StatsHeaderContainer percentage={percentageValue} >
        <GoBack redirect={redirect} percentage={percentageValue}/>
        <TextBox>
        <StatsHeaderTitle>{percentageText !== 'NaN' ? percentageText : '-'}%</StatsHeaderTitle>
        <StatsHeaderDescription>das refeições dentro da dieta</StatsHeaderDescription>
        </TextBox>
    </StatsHeaderContainer>
  );
}