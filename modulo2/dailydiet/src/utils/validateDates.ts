import { mealStorageDTO } from "@storage/Meal/mealStorageDTO";
import dayjs from "dayjs";
import { AppError } from "./AppError";
import { formatDate } from "./formatDate";

dayjs.locale('pt-br');

export function validateDates(day:string,hour:string){
  
    const dayHour = formatDate(day,hour);
    const validDayHour = dayjs(dayHour,'DD/MM/YYYY HH:mm').isValid();
    
    return validDayHour;
}