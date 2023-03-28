import { nanoid } from 'nanoid';

const usernameInputId = nanoid();
const emailInputId = nanoid();
const passwordInputId = nanoid();

export const inputsList = [
  {
    inputName: 'username',
    type: 'text',
    id: usernameInputId,
  },
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
