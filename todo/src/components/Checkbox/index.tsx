import { TouchableOpacity, View, Text } from "react-native"

type checkboxProps = {
  checked?: boolean,
  description: string,
}

export function Checkbox({description,checked=false}:checkboxProps){

  return (
    <TouchableOpacity>
      
      {
        checked
        ? 
       <View>
          <Text >
          {description}
          </Text>
        </View>  
      :
        <View>
          <Text >
          {description}
          </Text>
        </View>
      }

    </TouchableOpacity>
    

  )
}