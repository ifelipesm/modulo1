import { View,Text, TouchableOpacity } from "react-native"
import { CheckCircle, Circle, Trash } from 'phosphor-react-native'
import { styles } from "./styles"
import { useState } from "react";

interface taskProps {
  description: string,
  onRemove: () => void
  checked: boolean,
}



export function Task({description,onRemove,checked=false}:taskProps){
  const [isFocused,setIsFocused] = useState<boolean>(false);
  
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
      <TouchableOpacity style={[styles.removeIconBox, isFocused && styles.removeIconBoxFocused]} onBlur={() => setIsFocused(false)} onFocus={() => setIsFocused(true)} onPress={onRemove}>
          {
          isFocused 
          ? 
          <Trash  size={19} color="#E25858"/>
          : 
          <Trash  size={19} color="#808080"/>
          }
      </TouchableOpacity>
    </View>
  )
}