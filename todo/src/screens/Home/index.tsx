import { useState } from "react";
import { FlatList, TextInput, TouchableOpacity, View, Text, Alert } from "react-native";
import { Task } from "../../components/Task";
import { Feather } from "@expo/vector-icons"
import { styles } from "./styles";
import { TaskListEmpty } from "../../components/TaskListEmpty";
import { Header } from "../../components/Header";
import { TaskInfo } from "../../components/TaskInfo";

export function Home(){
  const [tasks,setTasks] = useState<string[]>([]);
  const [completedTask,setCompletedTask] = useState<string[]>([]);
  const [taskDescription,setTaskDescription] = useState('');
  const [checked,setChecked] = useState<string[]>([]);

    function handleCompletedTask(){
      if(tasks.includes(taskDescription)){
      setCompletedTask(prevState => [...prevState,taskDescription])
      }
    }

    function handleTaskAdd(){
      if(tasks.includes(taskDescription)){
        return Alert.alert("Tarefa cadastrada","Já existe uma tarefa cadastrada com esta descrição.");
      }
      setTasks(prevState => [...prevState,taskDescription]);
      setTaskDescription('');
    }

    function handleTaskRemove(description:string){
    setTasks(prevState => prevState.filter(task => task !== description))
    }

  return (
    <>
    <Header/>
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

      <TaskInfo amount={tasks.length} completed={completedTask.length} />
      
      <FlatList
        data={tasks}
        keyExtractor={item => item}
        renderItem={  ({item}) => (
        <>
        <Task
          key={item}
          description={item}
          checked={item}
          onCheck={()=>handleCompletedTask()}
          onRemove={()=>handleTaskRemove(`${item}`)}
        />
        </>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <TaskListEmpty/>
        )}
      />
    </View>   
    </>
  )
}