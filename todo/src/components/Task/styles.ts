import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
container:{
  display: "flex",
  flexDirection:"row",
  alignItems:"center",
  backgroundColor:'#262626',
  borderColor: '#333333',
  borderStyle:"solid",
  borderRadius:8,
  padding:12,
  marginTop:8,
},
description:{
  height: 40,
  fontSize:14,
  color:'#f2f2f2',
  marginRight:16,
  marginLeft:20,
},
descriptionChecked:{
  height: 40,
  fontSize:14,
  color:'#f2f2f2',
  paddingLeft:20,
  paddingRight:20,
  textDecorationLine:"line-through",
},
removeIcon:{
  height:32,
  width: 32,
},
})