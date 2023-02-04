import { View,Text } from "react-native";
import { styles } from "./styles";

type taskInfoProps={
  amount: number,
  completed: number,
}

export function TaskInfo({amount,completed}:taskInfoProps){
  return(
      <View style={styles.container}>
          <Text style={styles.createdText} >Criadas</Text>
          
          <View style={styles.counter}>
            <Text style={styles.counterText}>{amount}</Text>
          </View>
          
          <Text style={styles.completedText}>Concluídas</Text>
          
          <View style={styles.counter}>
            <Text style={styles.counterText}>{completed}</Text>
          </View>
      </View>
  )
}