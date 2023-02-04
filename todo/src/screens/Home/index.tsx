import { useState } from "react";
import { FlatList, TextInput, TouchableOpacity, View, Text, Alert, ScrollView } from "react-native";
import { Task } from "../../components/Task";
import { Feather } from "@expo/vector-icons"
import { styles } from "./styles";
import { TaskListEmpty } from "../../components/TaskListEmpty";
import { Header } from "../../components/Header";
import { TaskCounter } from "../../components/TaskCounter";

export function Home(){
  const [tasks,setTasks] = useState<string[]>([]);
  const [taskText,setTaskText] = useState('');
  const [checked,setChecked] = useState<boolean>(false);
  const [completedTask,setCompletedTask] = useState<string[]>([]);
  
    function handleTaskAdd(taskDescription:string){
        setTasks(prevState => [...prevState,taskDescription]);
        setTaskText('');
    }

    function handleTaskRemove(taskDescription:string){
      if(checked){
        setTasks(prevState => prevState.filter(task => task !== taskDescription))
        setCompletedTask(prevState => prevState.filter(completedTask => completedTask !== taskDescription))
      }
      else
        setTasks(prevState => prevState.filter(task => task !== taskDescription))
    }

    function handleCompletedTask(taskDescription:string){
      if(completedTask.includes(taskDescription)){
        setCompletedTask(prevState => prevState.filter(completedTask => completedTask !== taskDescription))
        setChecked(false);
      }
      else{
        setCompletedTask(prevState => [...prevState,taskDescription])
        setChecked(true);
      }
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
        onChangeText={setTaskText}
        value={taskText}
        />
        <TouchableOpacity style={styles.button} onPress={()=>handleTaskAdd(taskText)}>
          <Feather style={styles.buttonIcon} name="plus-circle" size={16}/>
        </TouchableOpacity>
      </View>

      <TaskCounter amount={tasks.length} completed={completedTask.length} />
      
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
      {
        tasks.length > 0
        ?
        tasks.map((task,i) => 
          (
            <TouchableOpacity onPress={()=>handleCompletedTask(task)} >
              <Task
                key={i}
                description={task}
                checked={completedTask.includes(task)}
                onRemove={()=>handleTaskRemove(`${task}`)}
              />
            </TouchableOpacity>
          ))
          : <TaskListEmpty/>
      }
      </ScrollView>
    </View>  

    </>
  )
}