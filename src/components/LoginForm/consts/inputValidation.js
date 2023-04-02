import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required(),
  password:
    Yup.string()
    .required(),
});
