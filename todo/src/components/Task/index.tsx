import { View,Text, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"
import { styles } from "./styles"

interface taskProps {
  description: string,
  onRemove: () => void
  checkedValue: boolean,
}

export function Task({description,onRemove,checkedValue=false}:taskProps){
  return(
    <View style={styles.container}>
      {
      checkedValue
      ? 
          <>
            <Feather name="check-circle" color="#4EA8DE" size={24} />
            <Text style={styles.descriptionChecked}>{description}</Text>
          </>
      :
         <>
            <Feather name="circle" color="#4EA8DE" size={24} />
            <Text style={styles.description}>{description}</Text>
          </>
      }
      <TouchableOpacity style={styles.removeIcon} onPress={onRemove}>
          <Feather name="trash-2" size={18} color="#808080"/>
      </TouchableOpacity>
    </View>
  )
}