import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    height:"100%",
    width:"100%",
    backgroundColor:'#1a1a1a',
    flex: 1,
    padding:24,
  },
  form:{
    marginTop:142,
    marginBottom:32,
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
  listEmptyContainer:{
    marginTop:68,
    paddingLeft:24,
    paddingRight:24,
    display: "flex",
    flexDirection:"column",
    alignItems:"center",
  },
  listEmptyTextBold:{
    fontWeight:'bold',
    textAlign:'center',
    color:'#808080',
    fontSize:14,
    marginTop:16,

  },
  listEmptyText:{
    fontWeight:'normal',
    textAlign:'center',
    color:'#808080',
    fontSize:14,
  }

})