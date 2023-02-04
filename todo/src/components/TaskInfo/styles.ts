import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  
  container:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:32,
    marginBottom:20,
    marginLeft:10,
    marginRight:24,
    padding:0,
  },

  createdText:{
    color:"#4EA8DE",
    fontSize:14,
    fontWeight:"700",
    paddingRight:8,
    paddingLeft:0,
  },

  completedText:{
    color:"#8284FA",
    fontSize:14,
    fontWeight:"700",
    paddingLeft:144,
    paddingRight:8,
  },
  
  counter:{
    width:25,
    height:19,
    backgroundColor:"#333333",
    borderRadius:999,
    paddingLeft:8,
    paddingRight:8,
    paddingTop:2,
    paddingBottom:2,
    alignItems:"center",
  },
  counterText:{  
  fontSize:12,
  lineHeight:15,
  fontWeight:"700",
  color:"#d9d9d9",
  }
})