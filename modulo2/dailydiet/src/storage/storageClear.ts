import AsyncStorage from "@react-native-async-storage/async-storage"


export async function storageClear(){
  AsyncStorage.clear();
}
