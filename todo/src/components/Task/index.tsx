import { View,Text, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"
import { styles } from "./styles"

interface taskProps {
  description: string,
  onRemove: () => void
  checked: boolean,
}

export function Task({description,onRemove,checked=false}:taskProps){
  return(
    <View style={styles.container}>
      {
      checked
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
      <TouchableOpacity style={styles.removeIconBox} onPress={onRemove}>
          <Feather name="trash-2" size={20} color="#808080"/>
      </TouchableOpacity>
    </View>
  )
}