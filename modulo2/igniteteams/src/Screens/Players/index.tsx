import { useEffect, useRef, useState } from 'react';
import { Alert, FlatList, TextInput } from 'react-native'

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Highlight } from '@components/Highlight';
import { PlayerCard } from '@components/PlayerCard';
import { Filter } from '@components/Filter';
import { HeaderList, NumberOfPlayers } from '@components/Filter/styles';

import { Container, Form } from './styles';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppError } from '@utils/AppError';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playerGetByGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam';
import { PlayerStorageDTO } from '@storage/player/playerStorageDTO';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';

type routeParams = {
  group: string;
}

export function Players() {
  const [newPlayerName,setNewPlayerName] = useState('');
  const [team,setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const navigation = useNavigation();
  const route = useRoute();
  const { group } = route.params as routeParams;


  const newPlayerNameInputRef = useRef<TextInput>(null);

    async function fetchPlayersByTeam(){
      try{
        const playersByTeam = await playerGetByGroupAndTeam(group,team);
        setPlayers(playersByTeam);
      }
      catch(error){
        console.log(error);
        Alert.alert('Jogador', 'Não foi possível exibir a lista de jogadores.');
      }
    }

    async function handleAddPlayer(){
      if(newPlayerName.trim().length === 0){
        return Alert.alert('Novo Jogador', 'Informe o nome do jogador.');
        }  
        const newPlayer = {
        name: newPlayerName,
        team,
        }
        try{
          await playerAddByGroup(newPlayer,group);
          newPlayerNameInputRef.current?.blur(); // remove focus
          setNewPlayerName(''); 
          fetchPlayersByTeam();
        }
        catch(error){
          if(error instanceof AppError){
            Alert.alert('Novo Jogador', error.message);
          } 
          else {
            console.log(error);
            Alert.alert('Novo Jogador', 'Não foi possível adicionar um novo jogador.');
          }
        } 
      }

    async function handlePlayerRemove(playerName: string){
      try{  
        await playerRemoveByGroup(playerName,group);
        fetchPlayersByTeam();
      }
      catch(error){
        if(error instanceof AppError){
          Alert.alert('Remover Jogador', error.message);
        } 
        else {
          console.log(error);
          Alert.alert('Remover Jogador', 'Não foi possível remover o jogador.');
        }
      } 
    }

    async function groupRemove(){
      try{
        await groupRemoveByName(group);
        navigation.navigate('groups');
      }
      catch(error){
        if(error instanceof AppError){
          Alert.alert('Remover Grupo', error.message);
        } 
        else {
          console.log(error);
          Alert.alert('Remover Grupo', 'Não foi possível remover o grupo.');
        }
      } 
    }

    async function handleGroupRemove(){
      Alert.alert(
        'Remover','Deseja Remover o grupo?',
        [
          {text:'Não',style:'cancel'},
          {text:'Sim',onPress: ()  =>  groupRemove()},
        ]
      );
    }

  useEffect(()=>{
    fetchPlayersByTeam();
  },[team]);

  return (
    <Container>
      <Header showBackButton/>

      <Highlight 
        title={group}
        subtitle="Adicione a galera e separe os times!"  
      />

      <Form>  
        <Input
          inputRef={newPlayerNameInputRef} 
          onChangeText={setNewPlayerName}
          placeholder="Nome do participante"
          autoCorrect={false}
          value={newPlayerName}
          onSubmitEditing={handleAddPlayer} // submit on keyboard
          returnKeyType="done"  // return of submit on keyboard
        />

        <ButtonIcon
          icon="add"
          onPress={handleAddPlayer}
        />
      </Form>

      <HeaderList>
        <FlatList
        data={[`Time A`, 'Time B']}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Filter
          title={item}
          isActive={item === team}
          onPress={() => setTeam(item)}
          />
        )}
        horizontal
        />
        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>
      
      <FlatList
        data={players}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <PlayerCard 
            name={item.name} 
            onRemove={() => handlePlayerRemove(item.name)}
          />
        )}
        ListEmptyComponent = {() =>  (
          <ListEmpty
            message="Não há jogadores neste time."
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          {paddingBottom:100},
          players.length === 0 && { flex:1 }
          ]}
      />

      <Button
      title="Remover Time"
      type="SECONDARY"
      onRemove={()  =>  handleGroupRemove()}
      />
    </Container>
  );
}