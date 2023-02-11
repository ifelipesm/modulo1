import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { playerGetByGroup } from "./playerGetByGroup";
import { PlayerStorageDTO } from "./playerStorageDTO";


export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string){
  try{
  
    const storedGroupPlayers = await playerGetByGroup(group);

    const playerAlreadyExists = storedGroupPlayers.filter(
      player => player.name === newPlayer.name);

    if(playerAlreadyExists.length > 0){
      throw new AppError("Já existe um jogador com este nome");
    }

    const storage = JSON.stringify([...storedGroupPlayers,newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`,storage);
  } catch(error){
    throw (error);
  }
}