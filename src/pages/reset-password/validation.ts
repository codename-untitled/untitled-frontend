import * as Yup from 'yup';

export const schema = Yup.object().shape({
  oldPassword: Yup.string().required('current password is required'),
  newPassword: Yup.string()
    .required('password is required')
    .min(8, 'password should contain 8 characters')
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      'password must contain one number and one special character.'
    ),
  confirmNewPassword: Yup.string()
    .required('please retype your password.')
    .oneOf([Yup.ref('newPassword')], 'your passwords do not match.'),
});
