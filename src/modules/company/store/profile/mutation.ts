import { useMutation } from 'hooks/useMutation';
import { api } from 'lib/api';
import { MutationOptions } from 'modules/general/store/types';
import { ResetCompanyPassword } from './types';

export const useResetCompanyPasswordMutation = (
  options: MutationOptions<undefined>
) =>
  useMutation<ResetCompanyPassword, undefined>(
    'companies/reset-password',
    api.post,
    {
      onSuccess: options.onSuccess,
      onError: options.onError,
    }
  );
