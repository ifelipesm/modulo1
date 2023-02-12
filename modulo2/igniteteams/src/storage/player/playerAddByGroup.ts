import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { playerGetByGroup } from "./playerGetByGroup";
import { PlayerStorageDTO } from "./playerStorageDTO";


export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string){
  try{
  
    const storedPlayersByGroup = await playerGetByGroup(group);

    const playerAlreadyExists = storedPlayersByGroup.filter(
      player => player.name === newPlayer.name);

    if(playerAlreadyExists.length > 0){
      throw new AppError("Já existe um jogador com este nome");
    }

    const newStorageData = JSON.stringify([...storedPlayersByGroup,newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, newStorageData);
  } catch(error){
    throw (error);
  }
}