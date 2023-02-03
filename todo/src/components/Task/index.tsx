import { View,Text, TouchableOpacity } from "react-native"
import { Checkbox } from "../Checkbox"
import { Feather } from "@expo/vector-icons"
import { styles } from "./styles"

interface taskProps {
  description: string,
  onRemove: () => void
  checked: boolean,
}

export function Task({description,onRemove,checked}:taskProps){
  return(
    <View style={styles.container}>
      <Checkbox checked={checked}/>
      <Text style={styles.description}>{description}
      </Text>
      <TouchableOpacity style={styles.removeIcon} onPress={onRemove}>
          <Feather name="trash-2" size={18} color="#808080"/>
      </TouchableOpacity>
    </View>
  )
}