import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Heading, SectionList, VStack,Text } from "native-base";
import { useState } from "react";

export function History(){
  const [exercises, setExercises]= useState([
    {
    title: "26.08.22",
    data:  ["Remada unilateral","Levantamento terra"]
    },
    {
    title: "27.08.22",
    data: ["Levantamento terra","Puxada frontal","Remada curvada"]
    }
  ])

  return (
    <VStack flex={1} >
      <ScreenHeader title="Histórico de Exercícios" />
      <SectionList
      sections={exercises}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <HistoryCard name={item}/>
      )}
      renderSectionHeader={({section})=> (
        <Heading color="gray.200" fontFamily={"heading"} fontSize="md" mt={10} mb={3} >
          {section.title}
        </Heading>
      )}
      contentContainerStyle={exercises.length === 0 && {flex:1, justifyContent:'center'}}
      ListEmptyComponent={()=>(
        <Text color="gray.100" textAlign="center">
          Não há exercícios registrados ainda.
          {'\n'}
          Vamos fazer exercícios hoje?
        </Text>
      )}
      px={8}
      showsVerticalScrollIndicator={false}
      />
    </VStack>
  )
}