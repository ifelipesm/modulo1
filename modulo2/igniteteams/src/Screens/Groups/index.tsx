import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import * as Styles from './styles';

export function Groups() {
  return (
    <Styles.Container>       
      <Header/>
      <Highlight 
        title="Turmas"
        subtitle="Jogue com a sua turma" 
      />
      <GroupCard title="Título do GroupCard"  />
    </Styles.Container>
  );
}