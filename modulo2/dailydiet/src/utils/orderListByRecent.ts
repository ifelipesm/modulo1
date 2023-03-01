import { mealStorageDTO } from "@storage/Meal/mealStorageDTO";
import dayjs from "dayjs";
import { useState } from "react";
import { Alert } from "react-native";


export function orderListByRecent(meals: mealStorageDTO[]){
  
  const today = new Date();
  const todayString = today.toString();
  const firstDayOfTheYear = dayjs().startOf('year').toString();

  const [mostRecentDay,setMostRecentDay] = useState(firstDayOfTheYear);
  const [mostOldDay,setMostOldDay] = useState(todayString);
  
  const a = meals.reduce((acc:any,meal) => {
    if(dayjs(acc[meal.day].day).isBefore(meal.day)){
      return acc;
    }
  })

 const findArrayLimit = meals.map((meal) => {
    if(dayjs(meal.day).isAfter(mostRecentDay)){
      setMostRecentDay(meal.day);
      let i = meals.findIndex(meal => dayjs(meal.day).isAfter(mostRecentDay));
    } 
    else if (dayjs(meal.day).isBefore(mostOldDay)){
      setMostOldDay(meal.day);
    }
  })


   const dates = meals.reduce((acc:any,meal) => { 
    return meal.day;
  },{})

  const datesSort = dates.sort((a: { day: Date; }, b:{ day: Date;}) => {a.day,b.day}).reverse();

  const resetMostRecentDay = mostRecentDay;

  const arrayOrdered = meals.reduce((acc: any, meal) => {  
    
    if (!acc[meal.day]) {
      acc[meal.day] = [];
    }
    while(meal.day !== mostRecentDay){
      let recentDayGetsOlder = dayjs(mostRecentDay).subtract(1,'day').toString
      setMostRecentDay(recentDayGetsOlder);
    }
    setMostRecentDay(resetMostRecentDay)
    acc[meal.day].push(meal);
    return acc;
    do{
      if(meal.day !== mostRecentDay){
        let recentDayGetsOlder = dayjs(mostRecentDay).subtract(1,'day').toString
        setMostRecentDay(recentDayGetsOlder);
      }
      else{
       
      }
    } while(dayjs(mostRecentDay).isAfter(mostOldDay));
  }, {});
      

  const sectionListData = Object.keys(arrayOrdered).map((item) => {
    const data = arrayOrdered[item];
    return {
      title: item,
      data,
    };
  });
  return sectionListData;
}