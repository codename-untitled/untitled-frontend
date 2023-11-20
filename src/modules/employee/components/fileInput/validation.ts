/* eslint-disable @typescript-eslint/indent */
import * as Yup from 'yup';

interface TestContextExtended {
  originalValue?: unknown;
}

export const schema = Yup.object().shape({
  docs: Yup.mixed()
    .test('fileSize', 'File size is too large', (value, context) => {
      const { originalValue } = context as Yup.TestContext &
        TestContextExtended;
      return originalValue && originalValue.size <= 5 * 1024 * 1024;
    })
    .required('a document is required'),
});
