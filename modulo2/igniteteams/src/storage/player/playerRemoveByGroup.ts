import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "../storageConfig";
import { playerGetByGroup } from "./playerGetByGroup";
import { PlayerStorageDTO } from "./playerStorageDTO";


export async function playerRemoveByGroup(newPlayer: PlayerStorageDTO, group: string){
  try{
  
    const storedGroupPlayers = await playerGetByGroup(group);

    const removedPlayerGroup = storedGroupPlayers.filter(
      player => player.name !== newPlayer.name);


    const storage = JSON.stringify([...removedPlayerGroup])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`,storage);
  } catch(error){
    throw (error);
  }
}