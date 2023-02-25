import { StatsCardContainer, StatsNumber, StatsText } from "./styles";

type Props = {
  amount: number;
  text: string;
  cardType: string;
}

export function StatsDietCard({amount,text,cardType}:Props) {
  return (
    <StatsCardContainer cardType={cardType}>
      <StatsNumber>{amount}</StatsNumber>
      <StatsText>{text}</StatsText>
    </StatsCardContainer>
  );
}