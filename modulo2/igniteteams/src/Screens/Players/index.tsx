import { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native'

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
import { useRoute } from '@react-navigation/native';
import { AppError } from '@utils/AppError';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playerGetByGroup } from '@storage/player/playerGetByGroup';
import { playerGetByGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam';
import { PlayerStorageDTO } from '@storage/player/playerStorageDTO';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';

type routeParams = {
  group: string;
}

export function Players() {
  const [newPlayerName,setNewPlayerName] = useState('');
  const [team,setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as routeParams;

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
        setNewPlayerName('');
      }

    function handleRemovePlayer(player: string){
      const removedPlayerList = players.filter(p => p.name !== player);
      setPlayers(removedPlayerList);

      const removedPlayer = {
        name: player,
        team,
      }

      playerRemoveByGroup(removedPlayer,group);
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
          onChangeText={setNewPlayerName}
          placeholder="Nome do participante"
          autoCorrect={false}
          value={newPlayerName}
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
            onRemove={() => handleRemovePlayer(item.name)}
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
      />
    </Container>
  );
}