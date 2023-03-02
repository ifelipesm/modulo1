import dayjs from "dayjs";

dayjs.locale('pt-br');

export function formatDate(day:string,hour:string){

  const dayWithBlankSpace = day.concat(' ');
  const dayHour = dayWithBlankSpace.concat(hour);

  return dayHour;
}