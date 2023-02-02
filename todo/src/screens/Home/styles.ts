import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
  width: "100%",
  flex: 1,
  backgroundColor:'#0D0D0D',
  },
  form:{
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"center",
    padding: 0,
    gap:4
  },
  inputText:{
    padding:16,
    gap:"8",
    backgroundColor:'#262626',
    border: 1,
    borderColor:'#0D0D0D',
    borderStyle:'solid',
    borderRadius:6,
  },
  button:{
  width: 52,
  height: 52,
  padding: 18,
  gap: 8,
  },
  buttonIcon:{
  alignItems:"center",
  justifyContent:"center",
  },
  listEmptyTextIcon:{
  alignItems:"center",
  justifyContent:"center",
  flex:1,
  },
  listEmptyTextBold:{
  fontFamily:"Inter"

  },
  listEmptyText:{

  }

})