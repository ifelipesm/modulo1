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
    </Styles.Container>
  );
}