import { View,Text, TouchableOpacity } from "react-native"
import { Checkbox } from "../Checkbox"
import { Feather } from "@expo/vector-icons"
import { styles } from "./styles"

interface taskProps {
  description: string,
  onRemove: () => void
  onCheck: () => void,
  checked: boolean,
}

export function Task({description,onRemove,onCheck,checked}:taskProps){
  return(
    <View style={styles.container}>
      <Checkbox />
      <Text style={styles.description}>{description}
      </Text>
      <TouchableOpacity style={styles.removeIcon} onPress={onRemove}>
          <Feather name="trash-2" size={18} color="#808080"/>
      </TouchableOpacity>
    </View>
  )
}