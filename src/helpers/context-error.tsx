import { useEffect } from 'react';
import { useFormikContext } from 'formik';
import { toast } from 'react-hot-toast';
import { MutationResult } from 'hooks/useMutation';

type ErrorObject = Record<string, string[]>;

type MutationError = {
  statusCode: number;
  message: string | ErrorObject;
};

export type MutationType = {
  error: MutationError;
};

type FormStateError<T> = {
  mutation: MutationResult<T>;
  toasterId: string;
  defaultField?: string;
};

export function FormikStateContextError<T>({
  mutation,
  defaultField,
  toasterId,
}: FormStateError<T>) {
  const formik = useFormikContext();

  useEffect(() => {
    if (typeof mutation.error?.message === 'string') {
      formik.setSubmitting(false);

      toast.error(mutation.error?.message, {
        id: toasterId,
        duration: 3000,
      });
    }

    if (mutation.error) {
      mutation.reset();
    }

    if (!mutation.error) {
      formik.setSubmitting(false);
    }
  }, [mutation, toasterId, defaultField, formik.setSubmitting]);

  return null;
}
