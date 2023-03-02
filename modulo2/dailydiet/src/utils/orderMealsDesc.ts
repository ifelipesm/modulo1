import { mealStorageDTO } from "@storage/Meal/mealStorageDTO";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import { formatDate } from "./formatDate";


dayjs.locale('pt-br');


export function orderMealsDesc(meals:mealStorageDTO[]){


      const sortedMeals = meals.sort((a,b) => {
        let date1 = formatDate(a.day,a.hour)
        let date2 = formatDate(b.day,b.hour)
        if(dayjs(date1,'DD/MM/YYYY HH:mm').isBefore(dayjs(date2,'DD/MM/YYYY HH:mm'))){
          return -1;
        }
        else if(dayjs(date1,'DD/MM/YYYY HH:mm').isAfter(dayjs(date2,'DD/MM/YYYY HH:mm'))){
          return 1;
        }
        else{
          return 0;
        }
      }).reverse();

  return sortedMeals;
}