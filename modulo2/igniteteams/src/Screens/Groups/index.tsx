import { useState } from 'react';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';


export function Groups() {
  const [groups,setGroups]=useState<string[]>(['1','2','3','4','5','6','7'])
  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('new');
  }
  
  return (
    <Container>       
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
      <Button 
        title="Criar Nova Turma" 
        type="PRIMARY"
        onPress={handleNewGroup}
      />
    </Container>
  );
}