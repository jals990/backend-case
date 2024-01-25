import { v4 as uuidv4 } from 'uuid';

import {
  addDays as addDaysDateFns,
} from 'date-fns'

export function sortByDate(a, b) {
  if (a.createdAt > b.createdAt) {
    return -1;
  } else return 1;
}

export function addDays(data, days) {
  const newDate = addDaysDateFns(data, days);
  return newDate;
}

export const id = () => uuidv4()
