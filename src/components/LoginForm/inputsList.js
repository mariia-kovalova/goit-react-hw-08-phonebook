import { nanoid } from 'nanoid';

const emailInputId = nanoid();
const passwordInputId = nanoid();

export const inputsList = [
  {
    inputName: 'email',
    type: 'email',
    id: emailInputId,
  },
  {
    inputName: 'password',
    type: 'password',
    id: passwordInputId,
  },
];
