import { useMutation } from 'hooks/useMutation';
import { api } from 'lib/api';
import { MutationOptions } from 'modules/general/store/types';
import { AddEmployeePayload, EditEmployeePayload } from './types';

export const useAddEmployeeMutation = (options: MutationOptions<undefined>) =>
  useMutation<AddEmployeePayload, undefined>('employees/create', api.post, {
    onSuccess: options.onSuccess,
    onError: options.onError,
  });

export const useEditEmployeeMutation = (
  employeeId: string,
  options: MutationOptions<undefined>
) =>
  useMutation<EditEmployeePayload, undefined>(
    `employees/${employeeId}`,
    api.put,
    {
      onSuccess: options.onSuccess,
      onError: options.onError,
    }
  );
