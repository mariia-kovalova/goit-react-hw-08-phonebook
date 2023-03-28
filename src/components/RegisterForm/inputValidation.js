import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Mininum 2 characters')
    .max(30, 'Maximum 30 characters')
    .required(),
  email: Yup.string().email('Invalid email format').required(),
  password: Yup.string()
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .required(),
});
