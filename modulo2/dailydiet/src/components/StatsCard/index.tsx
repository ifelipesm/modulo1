import React from 'react';
import { StatsCardContainer, StatsNumber, StatsText } from './styles';

type Props = {
  amount: number;
  text: string;
}

export function StatsCard({text,amount}:Props) {
  return (
    <StatsCardContainer>
      <StatsNumber>{amount}</StatsNumber>
      <StatsText>{text}</StatsText>
    </StatsCardContainer>
  );
}