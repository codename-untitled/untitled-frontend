import * as Yup from 'yup';

export const schema = Yup.object().shape({
  firstName: Yup.string().required('first name is required'),
  lastName: Yup.string().required('last name is required'),
  email: Yup.string().required('email is required').email('email is invalid'),
  address: Yup.string().required('address is required'),
  phoneNumber: Yup.string()
    .required('phone number is required')
    .min(11, 'phone number is not valid'),
  role: Yup.string()
    .required('Role is required')
    .oneOf(['ADMIN', 'MEMBER'], 'Invalid role. Choose either ADMIN or MEMBER'),
  department: Yup.string().required('department is required'),
  jobTitle: Yup.string().required('job title is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password should contain 8 characters'),
});
