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
  paddingTop: 8,
  paddingLeft:12,
  paddingRight:12,
  paddingBottom:8,
  marginTop:8,
},
description:{
  height: 40,
  width: 235,
  fontSize:14,
  color:'#f2f2f2',
  marginLeft:20,
},
descriptionChecked:{
  height: 40,
  width: 235,
  fontSize:14,
  color:'#f2f2f2',
  marginLeft:20,
  textDecorationLine:"line-through",
},
removeIconBox:{
  height:32,
  width: 32,
  marginLeft:8,
  marginRight:8,
  justifyContent:"center",
},
})