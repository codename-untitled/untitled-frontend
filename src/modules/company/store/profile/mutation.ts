import { useMutation } from 'hooks/useMutation';
import { api } from 'lib/api';
import { MutationOptions } from 'modules/general/store/types';
import { ResetCompanyProfile } from './types';

export const useEditEmployeeMutation = (options: MutationOptions<undefined>) =>
  useMutation<ResetCompanyProfile, undefined>('employees', api.put, {
    onSuccess: options.onSuccess,
    onError: options.onError,
  });
