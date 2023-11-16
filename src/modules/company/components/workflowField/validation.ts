/* eslint-disable @typescript-eslint/indent */
import * as Yup from 'yup';

interface TestContextExtended {
  originalValue?: unknown;
}

export const signatureSchema = Yup.object().shape({
  title: Yup.string().required('title is required'),
  overview: Yup.string().required('overview is required'),
  document: Yup.mixed()
    .test('fileSize', 'File size is too large', (value, context) => {
      const { originalValue } = context as Yup.TestContext &
        TestContextExtended;
      return originalValue && originalValue.size <= 5 * 1024 * 1024;
    })
    .required('A document is required'),
});

export const checklistSchema = Yup.object().shape({
  title: Yup.string().required('title is required'),
  overview: Yup.string().required('overview is required'),
  items: Yup.array(
    Yup.object({
      label: Yup.string().required('label is required'),
    })
  ),
});

export const uploadSchema = Yup.object().shape({
  title: Yup.string().required('title is required'),
  overview: Yup.string().required('overview is required'),
  document: Yup.array(
    Yup.object({
      name: Yup.string().required('label is required'),
    })
  ),
});
