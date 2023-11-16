import { useMutation } from 'hooks/useMutation';
import { api } from 'lib/api';
import { MutationOptions } from 'modules/general/store/types';
import { ChecklistOrUploadPayload } from './types';

export const useCreateChecklistOrUploadMutation = (
  options: MutationOptions<undefined>
) =>
  useMutation<ChecklistOrUploadPayload, undefined>(
    'onboarding-step',
    api.post,
    {
      onSuccess: options.onSuccess,
      onError: options.onError,
    }
  );
