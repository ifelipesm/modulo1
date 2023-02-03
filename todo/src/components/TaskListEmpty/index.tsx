import { Text, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons"

export function TaskListEmpty(){
  return (
    <>
      <View style={styles.listEmptyContainer}>
        <Feather 
        name="clipboard" size={56} color="#808080"
        />
        <Text style={styles.listEmptyTextBold}>
          Você ainda não tem tarefas cadastradas.
        </Text>
        <Text style={styles.listEmptyText}>
          Crie tarefas e organize seus itens a fazer.
        </Text>
      </View>
    </>
  )
}