import { useState } from "react";
import { FlatList, TextInput, TouchableOpacity, View, Text, Alert } from "react-native";
import { Task } from "../../components/Task";
import { Feather } from "@expo/vector-icons"


import { styles } from "./styles";

export function Home(){
  const [tasks,setTasks] = useState<string[]>([])
  const [taskDescription,setTaskDescription] = useState('');
  const [checked,setChecked] = useState(false);

    function handleTaskAdd(){
      if(tasks.includes(taskDescription)){
        return Alert.alert("Tarefa cadastrada","Já existe uma tarefa cadastrada com esta descrição.");
      }
      setTasks(prevState => [...prevState,taskDescription]);
      console.log(tasks.length);
      setTaskDescription('');
    }

    function handleTaskRemove(description:string){
    setTasks(prevState => prevState.filter(task => task !== description))
    }

  return (
    <View style={styles.container}>
      
      <View style={styles.form}>
        <TextInput 
        style={styles.inputText}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={setTaskDescription}
        value={taskDescription}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Feather style={styles.buttonIcon} name="plus" size={16}/>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={tasks}
        keyExtractor={item => item}
        renderItem={  ({item}) => (
        <Task
          key={item}
          description={item}
          onRemove={()=>handleTaskRemove(`${item}`)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <>
          <View style={styles.listEmptyContainer}>
            <Feather 
            name="clipboard" size={56} color="#808080"
            />
            <Text style={styles.listEmptyTextBold}>
              Você ainda não tem tarefas cadastradas.
            </Text>
            <Text style={styles.listEmptyText}>
              Crie tarefas e organize seus itens a fazer.
            </Text>
          </View>
          </>
        )}
      />
    </View>   
  )
}