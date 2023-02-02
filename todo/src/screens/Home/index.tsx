import { useState } from "react";
import { FlatList, TextInput, TouchableOpacity, View, Text, Alert } from "react-native";
import { Task } from "../../components/Task";
import { Feather } from "@expo/vector-icons"

import Logo from "../../assets/logo.svg";
import { styles } from "./styles";

export default function Home(){
  const [tasks,setTasks] = useState<string[]>([])
  const [taskDescription,setTaskDescription] = useState('');
  const [checked,setChecked] = useState(false);

    function handleTaskAdd(){
      if(tasks.includes(taskDescription)){
        return Alert.alert("Tarefa cadastrada","Já existe uma tarefa cadastrada com esta descrição.");
      }
      setTasks(prevState => [...prevState,taskDescription]);
      setTaskDescription('');
    }

    function handleTaskRemove(description:string){
      Alert.alert('Remover',`Remover a tarefa da lista?`,[
        {
          text:'Sim',
          onPress: () => setTasks(prevState => prevState.filter(task => task !== description))
        },
        {
          text:'Não',
          style:'cancel'
        }
      ])
    }

  return (
    <View style={styles.container}>
      <Logo/>
      <View style={styles.form}>
        <TextInput 
        style={styles.inputText}
        placeholder="Adicione uma nova tarefa"
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
          <Feather 
          style={styles.listEmptyTextIcon} 
          name="clipboard" size={56}
          />
          <Text style={styles.listEmptyTextBold}>
            Você ainda não tem tarefas cadastradas.
          </Text>
          <Text style={styles.listEmptyText}>
            Crie tarefas e organize seus itens a fazer.
          </Text>
          </>
        )}
      />
    </View>   
  )
}