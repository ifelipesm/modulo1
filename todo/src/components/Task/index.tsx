import { View,Text, TouchableOpacity } from "react-native"
import { CheckCircle, Circle, Trash } from 'phosphor-react-native'
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
            <CheckCircle color="#5E60CE" size={24} />
            <Text style={styles.descriptionChecked}>{description}</Text>
          </>
      :
          <>
            <Circle color="#4EA8DE" size={24} />
            <Text style={styles.description}>{description}</Text>
          </>
      }
      <TouchableOpacity style={styles.removeIconBox} onPress={onRemove}>
          <Trash  size={19} color="#808080"/>
      </TouchableOpacity>
    </View>
  )
}