import * as Yup from 'yup';

export const schema = Yup.object().shape({
  title: Yup.string().required('workflow name is required'),
  overview: Yup.string().required('overview is required'),
  steps: Yup.array(
    Yup.object({
      step: Yup.string().required('step id is required'),
      order: Yup.number()
        .positive('step id must be over 1')
        .integer('step id must be a whole number')
        .min(1, 'step id must not be less than 1'),
    })
  ),
});
