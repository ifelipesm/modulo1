import { mealStorageDTO } from "@storage/Meal/mealStorageDTO";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';


dayjs.locale('pt-br');

export function orderMealsDesc(meals:mealStorageDTO[]){

  //const [dates,setDates] = useState<Date[]>([]);
  //const [filteredMeals,setFilteredMeals] = useState<mealStorageDTO[]>([]);

/*
     const dates = meals.map((meal)=>{
        const day = meal.day.concat(' ');
        const dayHour = day.concat(meal.hour);
        const formatedDate = dayjs(dayHour).format('DD/MM/YYYY HH:mm');
        //const date = dayjs(formatedDate).toDate();
        return formatedDate;
      })
      const sortedDates = dates.sort((a, b) => {
        let day1 = a;
        let day2 = b;
  
        if(dayjs(day1,'DD/MM/YYYY HH:mm').isBefore(dayjs(day2,'DD/MM/YYYY HH:mm'))){
          return -1;
        }
        else if(dayjs(day1,'DD/MM/YYYY HH:mm').isAfter(dayjs(day2,'DD/MM/YYYY HH:mm'))){
          return 1;
        }
        else{
          return 0;
        }
      });


      let result =  sortedDates.map((date)=>{
          //const stringDate = date.toDateString();
          const [day,hour] = date.split(' ');

          const filteredMeal = meals.filter((meal) => {if(meal.day === day && hour === meal.hour) return meal; else return []} )
          return [...filteredMeal];
        })
*/

    const sortedMeals = meals.sort((a,b) => {
        let day1 = dayjs(a.day).format('DD/MM/YYYY');
        let day2 = dayjs(b.day).format('DD/MM/YYYY');
        if(dayjs(day1,'DD/MM/YYYY').isBefore(dayjs(day2,'DD/MM/YYYY'))){
          
          return -1;
        }
        else if(dayjs(day1,'DD/MM/YYYY').isAfter(dayjs(day2,'DD/MM/YYYY'))){
          return 1;
        }
        else{
          return 0;
        }
      });

  return sortedMeals;
}