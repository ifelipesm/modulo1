import { View,Text } from "react-native";
import { styles } from "./styles";

type taskCounterProps={
  amount: number,
  completed: number,
}

export function TaskCounter({amount,completed}:taskCounterProps){
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