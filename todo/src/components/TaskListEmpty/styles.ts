import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
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