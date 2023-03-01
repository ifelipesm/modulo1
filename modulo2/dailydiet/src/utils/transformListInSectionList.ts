import { mealStorageDTO } from "@storage/Meal/mealStorageDTO";
import { useState } from "react";
import { dayjs } from "src/lib/dayjs";

export function transformListInSectionList(meals: mealStorageDTO[]) {


  const arrayCompared = meals.reduce((acc: any, meal) => {
    if (!acc[meal.day]) {
      acc[meal.day] = [];
    }
      acc[meal.day].push(meal);
      return acc;
  }, {});

  const sectionListData = Object.keys(arrayCompared).map((item) => {
    const data = arrayCompared[item];
    return {
      title: item,
      data,
    };
  });

  return sectionListData;
}
