import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    height:"100%",
    width:"100%",
    backgroundColor:'#1a1a1a',
    flex: 1,
    paddingLeft:24,
    paddingRight:24,
  },
  form:{
    height: 0,
    marginBottom:64,
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"center",
  },
  inputText:{
    width:"80%",
    height:54,
    padding:16,
    color:'#f2f2f2',
    backgroundColor:'#262626',
    border: 1,
    borderColor:'#0D0D0D',
    borderStyle:'solid',
    borderRadius:6,
    marginRight:4,
  },
  button:{
    width: 52,
    height: 52,
    padding: 18,
    backgroundColor:'#1E6F9F',
    borderRadius:5,
  
  },
  buttonIcon:{
    alignItems:"center",
    justifyContent:"center",
    color:'#F2F2F2',
  },
  taskCounter:{
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"center",
  }
})