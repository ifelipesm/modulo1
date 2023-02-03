import { View,Text } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons"

type taskInfoProps={
  amount: number,
  completed: number,
}

export function TaskInfo({amount,completed}:taskInfoProps){
  return(
      <View style={styles.container}>
        <Text style={styles.created} >Criadas:
        <Feather style={styles.counter} size={16} >{amount}</Feather>
        </Text>
        <Text style={styles.completed}>Concluídas:
        <Feather style={styles.counter} size={16} >{completed}</Feather>
        </Text>
      </View>
  )
}