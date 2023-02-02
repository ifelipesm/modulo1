import { View,Text, TouchableOpacity } from "react-native"
import { Checkbox } from "../Checkbox"
import { Feather } from "@expo/vector-icons"

interface taskProps {
  description: string,
  onRemove: () => void
}

export function Task({description,onRemove}:taskProps){
  return(
    <View>
      <Text>{description}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Text >
          <Feather name="trash" size={32}/>
        </Text>
      </TouchableOpacity>
    </View>
  )
}