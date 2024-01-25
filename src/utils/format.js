import { format as formatDateFns } from 'date-fns';

export function formatDate(value, mask){
  return formatDateFns(value, mask)
}

export const formatTypeDoc = (value) =>
  value
    .toString()
    .replace(1, 'alvara')
    .replace(2, 'procuracao')
    .replace(3, 'memorando');
