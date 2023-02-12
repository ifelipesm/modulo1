import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "../storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName (removedGroup: string){
  
try{  
  const storedGroups = await groupsGetAll();

  const newGroups = storedGroups.filter(group => group !== removedGroup);

  const groupStorage = JSON.stringify([...newGroups])

  await AsyncStorage.setItem(GROUP_COLLECTION, groupStorage);
  await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${removedGroup}`); 
}
catch(error){
  throw (error);
}
}