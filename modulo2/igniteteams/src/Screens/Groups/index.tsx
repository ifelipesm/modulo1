import { useState } from 'react';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import * as Styles from './styles';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';

export function Groups() {
  const [groups,setGroups]=useState<string[]>([])

  return (
    <Styles.Container>       
      <Header/>
      <Highlight 
        title="Turmas"
        subtitle="Jogue com a sua turma" 
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={  ( { item }  )=> (
          <GroupCard 
            title={item} 
            
          />)
        }
        contentContainerStyle={groups.length === 0 && { flex: 1}}
        ListEmptyComponent = {()=>  (
          <ListEmpty
            message="Não há turmas cadastradas."
          />
        )}
      />
    </Styles.Container>
  );
}