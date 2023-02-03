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
  height: 64,
  padding:12,
  marginTop:8,
},
description:{
  height: 40,
  fontSize:14,
  textAlign:"justify",
  color:'#f2f2f2',
  marginRight:16,
  marginLeft:20,
},
removeIcon:{
  padding: 6,
  height:32,
  width: 32,
},
})