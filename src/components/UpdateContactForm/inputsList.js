import { nanoid } from 'nanoid';

const nameInputId = nanoid();
const numberInputId = nanoid();

export const inputsList = [
  {
    inputName: 'name',
    type: 'text',
    id: nameInputId,
  },
  {
    inputName: 'number',
    type: 'tel',
    id: numberInputId,
  },
];
