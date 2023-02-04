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
  const [checked,setChecked] = useState<boolean>(false);

    function handleCompletedTask(){
      if(completedTask.includes(taskDescription)){
        setCompletedTask(prevState => prevState.filter(completedTask => completedTask !== taskDescription))
        return setChecked(false);
      }
      else{
        setCompletedTask(prevState => [...prevState,taskDescription])
        return setChecked(true);
      }
    }

    function handleTaskAdd(){
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
          <Feather style={styles.buttonIcon} name="plus-circle" size={16}/>
        </TouchableOpacity>
      </View>

      <TaskInfo amount={tasks.length} completed={completedTask.length} />
      
      <FlatList
        data={tasks}
        keyExtractor={item => item}
        renderItem={  ({item}) => 
        (
          <TouchableOpacity onPress={handleCompletedTask} >
            <Task
            key={item}
            description={item}
            checkedValue={checked}
            onRemove={()=>handleTaskRemove(`${item}`)}
            />
          </TouchableOpacity>
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