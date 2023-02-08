import * as S from './styles';

type Props = {
  title: string;
  subtitle: string;
}

export function Highlight({title, subtitle}:Props) {
  return (
    <S.Container>
      <S.Title>
        {title}
      </S.Title>
      <S.SubTitle>
        {subtitle}
      </S.SubTitle>
    </S.Container>
  );
}