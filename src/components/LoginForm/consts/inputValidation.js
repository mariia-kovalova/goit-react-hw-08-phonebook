import * as Yup from 'yup';

export const Schema = Yup.object().shape({
  email: Yup.string()
    .required('This field is required')
    .email('Invalid email format'),
  password: Yup.string().required('This field is required'),
});
