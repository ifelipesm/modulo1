import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "../storageConfig";
import { playerGetByGroup } from "./playerGetByGroup";


export async function playerRemoveByGroup(removedPlayerName: string, group: string){
  try{
  
    const storedPlayersByGroup = await playerGetByGroup(group);

    const newPlayerGroup = storedPlayersByGroup.filter(
      player => player.name !== removedPlayerName);


    const newStorageData = JSON.stringify([...newPlayerGroup])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, newStorageData);
  } catch(error){
    throw (error);
  }
}