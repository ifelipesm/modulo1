import { TouchableOpacity, View, Text } from "react-native"
import { Feather } from "@expo/vector-icons"

type checkboxProps = {
  checked?: boolean,
}

export function Checkbox({checked=false}:checkboxProps){

  return (
    <TouchableOpacity>
      
      {
        checked
        ? 
        <View>
          <Feather name="check-circle" color="#5E60CE" size={24} />
        </View>  
      :
        <View>
          <Feather name="circle" color="#4EA8DE" size={24} />
        </View>
      }

    </TouchableOpacity>
    

  )
}