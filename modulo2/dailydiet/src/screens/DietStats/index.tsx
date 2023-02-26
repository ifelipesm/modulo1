import { StatsCard } from '@components/StatsCard';
import { StatsDietCard } from '@components/StatsDietCard';
import { StatsHeader } from '@components/StatsHeader';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { DietCardBox, DietStatsContent, DietStatsData,Title  } from './styles';

type routeParams = {
  statistics:{
    percentageText: string,
    percentageValue: number,
    sequence:number,
    total: number,
    diet: number,
    outOfDiet: number,
  }
}

export function DietStats() {

  const navigation = useNavigation();
  const route = useRoute();
  const { statistics } = route.params as routeParams;

  function goHome(){
    navigation.navigate('overview');
  }

  return (
    <>
    <StatsHeader redirect={goHome} percentageValue={statistics.percentageValue} percentageText={statistics.percentageText}/>
    <DietStatsContent>
      <Title>Estatísticas Gerais</Title>
      <DietStatsData>
        <StatsCard amount={statistics.sequence}  text='melhor sequência de pratos dentro da dieta'/>
        <StatsCard amount={statistics.total}  text='refeições registradas'/>
        <DietCardBox>
          <StatsDietCard amount={statistics.diet} text='refeições dentro da dieta' cardType='GREEN' />
          <StatsDietCard amount={statistics.outOfDiet} text='refeições fora da dieta' cardType='RED'/>
        </DietCardBox>
      </DietStatsData>
    </DietStatsContent>
    </>
  );
}