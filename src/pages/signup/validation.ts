import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required('name is required'),
  address: Yup.string().required('address is required'),
  industry: Yup.string().required('industry is required'),
  email: Yup.string().required('email is required').email('email is invalid'),
  taxId: Yup.string().required('tax id is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password should contain 8 characters')
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      'password must contain one number and one special character.'
    ),
  confirmPassword: Yup.string()
    .required('please retype your password.')
    .oneOf([Yup.ref('password')], 'your passwords do not match.'),
});
