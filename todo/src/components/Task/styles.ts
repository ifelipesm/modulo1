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
  paddingTop:12,
  paddingBottom:8,
  paddingLeft:12,
  paddingRight:12,
  marginTop:8,
},
description:{
  height: 40,
  width: 235,
  fontSize:14,
  color:'#f2f2f2',
  marginLeft:12,
},
descriptionChecked:{
  height: 40,
  width: 235,
  fontSize:14,
  color:'#f2f2f2',
  marginLeft:12,
  textDecorationLine:"line-through",
},
removeIconBox:{
  height:32,
  width: 32,
  marginTop:16,
  marginBottom:16,
  marginRight:8,
  marginLeft:8,
},
})