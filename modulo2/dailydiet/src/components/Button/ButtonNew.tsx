import { ContainerNew, IconNew, TitleNew } from "./styles";

  type Props = {
    title: string;
    redirect: () => void;
  }

export function ButtonNew({title,redirect}:Props) {
  return (
    <ContainerNew onPress={redirect}>
      <IconNew />
      <TitleNew>{title}</TitleNew>
    </ContainerNew>
  );
}