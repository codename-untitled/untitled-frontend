import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: Yup.string().required('email is required').email('email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password should contain 8 characters')
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      'password must contain one number and one special character.'
    ),
});
